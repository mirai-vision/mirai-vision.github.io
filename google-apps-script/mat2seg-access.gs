const MAT2SEG = {
  formTitle: "Request access to the Mat2Seg dataset",
  responseSheetTitle: "Mat2Seg dataset access requests",
  deliveryLogSheetTitle: "Delivery log",
  citationReminder:
    "If you use Mat2Seg, please cite the associated paper. Citation details are available on the Mat2Seg dataset page.",
};

/**
 * Run once from the lab's Apps Script project. This creates the public form,
 * a private response Sheet, and the installable trigger that sends access links.
 */
function setupMat2SegAccessForm() {
  const properties = PropertiesService.getScriptProperties();
  if (properties.getProperty("MAT2SEG_FORM_ID")) {
    throw new Error("Mat2Seg has already been set up for this project.");
  }

  const form = FormApp.create(MAT2SEG.formTitle, true)
    .setDescription(
      "Submit this form to receive the Mat2Seg dataset link and citation guidance by email. " +
        "Your details are used only for dataset-access administration."
    )
    .setConfirmationMessage("Thank you. The Mat2Seg access link will be sent to the email address you provided.");

  form.addTextItem().setTitle("Full name").setRequired(true);

  const emailValidation = FormApp.createTextValidation()
    .requireTextIsEmail()
    .setHelpText("Enter a valid email address, preferably an institutional one.")
    .build();
  form
    .addTextItem()
    .setTitle("Email address")
    .setHelpText("Please use an institutional email address where possible.")
    .setValidation(emailValidation)
    .setRequired(true);

  form.addTextItem().setTitle("University or organization").setRequired(true);
  form
    .addMultipleChoiceItem()
    .setTitle("Affiliation")
    .setChoiceValues(["Academia", "Industry"])
    .setRequired(true);
  form
    .addParagraphTextItem()
    .setTitle("Intended use")
    .setHelpText("For example: academic research, benchmarking, or product research.")
    .setRequired(true);
  form
    .addCheckboxItem()
    .setTitle("Citation commitment")
    .setChoiceValues(["I will cite the Mat2Seg paper in work that uses this dataset."])
    .setRequired(true);

  const responseSheet = SpreadsheetApp.create(MAT2SEG.responseSheetTitle);
  form.setDestination(FormApp.DestinationType.SPREADSHEET, responseSheet.getId());
  getOrCreateMat2SegDeliveryLog(responseSheet);

  ScriptApp.newTrigger("sendMat2SegAccessEmail").forForm(form).onFormSubmit().create();

  properties.setProperties({
    MAT2SEG_FORM_ID: form.getId(),
    MAT2SEG_FORM_URL: form.getPublishedUrl(),
    MAT2SEG_FORM_EDIT_URL: form.getEditUrl(),
    MAT2SEG_RESPONSE_SHEET_ID: responseSheet.getId(),
  });

  Logger.log(`Public form URL: ${form.getPublishedUrl()}`);
  Logger.log(`Form editor URL: ${form.getEditUrl()}`);
  Logger.log(`Private response Sheet URL: ${responseSheet.getUrl()}`);
}

/**
 * Installable form-submit trigger. The Dropbox URL comes only from private
 * Script Properties and is never part of the form or website source.
 */
function sendMat2SegAccessEmail(event) {
  const properties = PropertiesService.getScriptProperties();
  const datasetUrl = properties.getProperty("MAT2SEG_DATASET_URL");
  if (!datasetUrl || !/^https:\/\//i.test(datasetUrl)) {
    throw new Error("Set a valid HTTPS MAT2SEG_DATASET_URL in Script Properties before accepting responses.");
  }

  const answers = getMat2SegAnswers(event.response);
  const email = answers["Email address"];
  const name = answers["Full name"] || "there";
  if (!email) {
    throw new Error("The form response did not contain an email address.");
  }

  const citationReminder =
    properties.getProperty("MAT2SEG_CITATION_INSTRUCTIONS") || MAT2SEG.citationReminder;
  const subject = "Your Mat2Seg dataset access link";
  const textBody = [
    `Hello ${name},`,
    "",
    "Thank you for your interest in Mat2Seg: An RGB-NIR Dataset and Benchmark for Material Segmentation of Household Objects.",
    "",
    `Download the dataset: ${datasetUrl}`,
    "",
    citationReminder,
    "",
    "Best regards,",
    "MIRAI Vision Lab",
  ].join("\n");
  const htmlBody = [
    `<p>Hello ${escapeMat2SegHtml(name)},</p>`,
    "<p>Thank you for your interest in <strong>Mat2Seg: An RGB-NIR Dataset and Benchmark for Material Segmentation of Household Objects</strong>.</p>",
    `<p><a href="${escapeMat2SegHtml(datasetUrl)}">Download the Mat2Seg dataset</a></p>`,
    `<p>${escapeMat2SegHtml(citationReminder).replace(/\n/g, "<br>")}</p>`,
    "<p>Best regards,<br>MIRAI Vision Lab</p>",
  ].join("");

  const responseSheet = SpreadsheetApp.openById(properties.getProperty("MAT2SEG_RESPONSE_SHEET_ID"));
  const deliveryLog = getOrCreateMat2SegDeliveryLog(responseSheet);

  try {
    MailApp.sendEmail({ to: email, subject, body: textBody, htmlBody });
    deliveryLog.appendRow([new Date(), event.response.getId(), email, name, "sent", ""]);
  } catch (error) {
    deliveryLog.appendRow([new Date(), event.response.getId(), email, name, "failed", String(error)]);
    throw error;
  }
}

function getMat2SegAnswers(formResponse) {
  return formResponse.getItemResponses().reduce((answers, itemResponse) => {
    const response = itemResponse.getResponse();
    answers[itemResponse.getItem().getTitle()] = Array.isArray(response) ? response.join(", ") : response;
    return answers;
  }, {});
}

function getOrCreateMat2SegDeliveryLog(spreadsheet) {
  const existing = spreadsheet.getSheetByName(MAT2SEG.deliveryLogSheetTitle);
  if (existing) return existing;

  const sheet = spreadsheet.insertSheet(MAT2SEG.deliveryLogSheetTitle);
  sheet.appendRow(["Sent at", "Response ID", "Email", "Name", "Status", "Error"]);
  sheet.setFrozenRows(1);
  return sheet;
}

function escapeMat2SegHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return entities[character];
  });
}
