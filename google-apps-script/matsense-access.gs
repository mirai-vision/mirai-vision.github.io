const MATSENSE = {
  formTitle: "Request access to the MatSense dataset",
  responseSheetTitle: "MatSense dataset access requests",
  deliveryLogSheetTitle: "Delivery log",
  citationReminder:
    "If you use MatSense, please cite the associated paper. Citation details are available on the MatSense dataset page.",
};

/**
 * Run once from the Apps Script editor. It creates the public form, a private
 * response Sheet, and the installable trigger that delivers approved requests.
 */
function setupMatSenseAccessForm() {
  const properties = PropertiesService.getScriptProperties();
  if (properties.getProperty("FORM_ID")) {
    throw new Error("MatSense has already been set up for this project.");
  }

  const form = FormApp.create(MATSENSE.formTitle, true)
    .setDescription(
      "Submit this form to receive the MatSense dataset link and citation guidance by email. " +
        "Your details are used only for dataset-access administration."
    )
    .setConfirmationMessage("Thank you. The MatSense access link will be sent to the email address you provided.");

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
    .setChoiceValues(["I will cite the MatSense paper in work that uses this dataset."])
    .setRequired(true);

  const responseSheet = SpreadsheetApp.create(MATSENSE.responseSheetTitle);
  form.setDestination(FormApp.DestinationType.SPREADSHEET, responseSheet.getId());
  getOrCreateDeliveryLog(responseSheet);

  ScriptApp.newTrigger("sendMatSenseAccessEmail").forForm(form).onFormSubmit().create();

  properties.setProperties({
    FORM_ID: form.getId(),
    FORM_URL: form.getPublishedUrl(),
    FORM_EDIT_URL: form.getEditUrl(),
    RESPONSE_SHEET_ID: responseSheet.getId(),
  });

  Logger.log(`Public form URL: ${form.getPublishedUrl()}`);
  Logger.log(`Form editor URL: ${form.getEditUrl()}`);
  Logger.log(`Private response Sheet URL: ${responseSheet.getUrl()}`);
}

/**
 * Installable form-submit trigger. The Dropbox URL is read only from private
 * Script Properties and is never part of the form or website source.
 */
function sendMatSenseAccessEmail(event) {
  const properties = PropertiesService.getScriptProperties();
  const datasetUrl = properties.getProperty("DATASET_URL");
  if (!datasetUrl || !/^https:\/\//i.test(datasetUrl)) {
    throw new Error("Set a valid HTTPS DATASET_URL in Script Properties before accepting responses.");
  }

  const answers = getAnswers(event.response);
  const email = answers["Email address"];
  const name = answers["Full name"] || "there";
  if (!email) {
    throw new Error("The form response did not contain an email address.");
  }

  const citationReminder = properties.getProperty("CITATION_INSTRUCTIONS") || MATSENSE.citationReminder;
  const subject = "Your MatSense dataset access link";
  const textBody = [
    `Hello ${name},`,
    "",
    "Thank you for your interest in MatSense: A Multimodal Dataset and Benchmark for Material Classification.",
    "",
    `Download the dataset: ${datasetUrl}`,
    "",
    citationReminder,
    "",
    "Best regards,",
    "MIRAI Vision Lab",
  ].join("\n");
  const htmlBody = [
    `<p>Hello ${escapeHtml(name)},</p>`,
    "<p>Thank you for your interest in <strong>MatSense: A Multimodal Dataset and Benchmark for Material Classification</strong>.</p>",
    `<p><a href="${escapeHtml(datasetUrl)}">Download the MatSense dataset</a></p>`,
    `<p>${escapeHtml(citationReminder).replace(/\n/g, "<br>")}</p>`,
    "<p>Best regards,<br>MIRAI Vision Lab</p>",
  ].join("");

  const responseSheet = SpreadsheetApp.openById(properties.getProperty("RESPONSE_SHEET_ID"));
  const deliveryLog = getOrCreateDeliveryLog(responseSheet);

  try {
    MailApp.sendEmail({ to: email, subject, body: textBody, htmlBody });
    deliveryLog.appendRow([new Date(), event.response.getId(), email, name, "sent", ""]);
  } catch (error) {
    deliveryLog.appendRow([new Date(), event.response.getId(), email, name, "failed", String(error)]);
    throw error;
  }
}

function getAnswers(formResponse) {
  return formResponse.getItemResponses().reduce((answers, itemResponse) => {
    const response = itemResponse.getResponse();
    answers[itemResponse.getItem().getTitle()] = Array.isArray(response) ? response.join(", ") : response;
    return answers;
  }, {});
}

function getOrCreateDeliveryLog(spreadsheet) {
  const existing = spreadsheet.getSheetByName(MATSENSE.deliveryLogSheetTitle);
  if (existing) return existing;

  const sheet = spreadsheet.insertSheet(MATSENSE.deliveryLogSheetTitle);
  sheet.appendRow(["Sent at", "Response ID", "Email", "Name", "Status", "Error"]);
  sheet.setFrozenRows(1);
  return sheet;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return entities[character];
  });
}
