# Dataset Google Form Setup

Each Apps Script file creates a public dataset access form, a private Google Sheet for responses, and an installable trigger that emails the Dropbox link after each response. The Dropbox URL is stored only in private Script Properties, never in the form, website, or this repository.

- `matsense-access.gs` creates the MatSense workflow.
- `mat2seg-access.gs` creates the Mat2Seg workflow.

## One-Time Setup

1. Go to [script.new](https://script.new) while signed in to the Google account that should own the form and Sheet.
2. Add the corresponding `.gs` file to the lab's Apps Script project and save it. The two scripts use distinct function and property names, so they can safely share one authorized project.
3. Run its setup function once and approve the requested permissions. The execution log contains the public form URL, editor URL, and private response Sheet URL.
4. In the Apps Script project, open **Project Settings** and add the dataset's private URL property: `DATASET_URL` for MatSense or `MAT2SEG_DATASET_URL` for Mat2Seg. Paste the Dropbox URL there. Do not put it in the script source.
5. Optionally add `CITATION_INSTRUCTIONS` for MatSense or `MAT2SEG_CITATION_INSTRUCTIONS` for Mat2Seg to customize the citation note in the email.
6. Copy the public form URL into `_config.yml` under the matching dataset key, then publish the site.

## Data Access

The form and response Sheet are private to the Google account that creates them unless that account explicitly shares them. The website links only to the public Google Form. The response Sheet includes a `Delivery log` tab showing whether each automatic email was sent.
