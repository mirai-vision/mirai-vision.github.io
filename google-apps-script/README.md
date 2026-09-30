# MatSense Google Form Setup

This Google Apps Script creates a public MatSense access-request form, a private Google Sheet for responses, and an installable trigger that emails the Dropbox link after each response. The Dropbox URL is stored only in private Script Properties, never in the form, website, or this repository.

## One-Time Setup

1. Go to [script.new](https://script.new) while signed in to the Google account that should own the form and Sheet.
2. Replace the starter code with `matsense-access.gs` and save the project.
3. Run `setupMatSenseAccessForm` once and approve the requested permissions. The execution log contains the public form URL, editor URL, and private response Sheet URL.
4. In the Apps Script project, open **Project Settings** and add a Script Property named `DATASET_URL`. Paste the Dropbox URL there. Do not put it in the script source.
5. Optionally add a `CITATION_INSTRUCTIONS` Script Property to customize the citation note in the email.
6. Copy the public form URL into `_config.yml` under `matsense_download.google_form_url`, then publish the site.

## Data Access

The form and response Sheet are private to the Google account that creates them unless that account explicitly shares them. The website links only to the public Google Form. The response Sheet includes a `Delivery log` tab showing whether each automatic email was sent.
