# Legal Pages, Footer Phone Number, and Contact Form Checkbox

**Date:** August 6, 2026  
**Chat title:** 3P Help Me — Legal Pages, Footer Phone, and Contact Form Checkbox  
**Repository:** 3Pconsulting/Organization-Website  
**Website:** 3phelpme.com  

## Request

Add legal protection and contact improvements to the 3P Help Me website.

The requested work included:

1. Add the business phone number to the shared footer.
2. Create a Terms of Service page.
3. Create a Privacy Policy page.
4. Create a Disclaimer page.
5. Add a required checkbox to the contact form so users agree to the Terms of Service, Privacy Policy, and Disclaimer before submitting.
6. Follow the existing 3P Help Me website design and styling.
7. Avoid unrelated changes.

## Files Created

The following public website pages were created in the root of the repo:

- `terms-of-service.html`
- `privacy-policy.html`
- `disclaimer.html`

These files should stay in the root folder so the public URLs are:

- `/terms-of-service.html`
- `/privacy-policy.html`
- `/disclaimer.html`

## Files Updated

The following existing files were updated:

- `partials/footer.html`
- `contact.html`

## Footer Update

The shared footer was updated to include the business phone number:

- Visible phone number: `352-246-0551`
- Clickable phone link: `tel:+13522460551`

Footer links were also planned/added for:

- Terms of Service
- Privacy Policy
- Disclaimer

## Contact Form Checkbox

The contact form was updated with a required checkbox before the submit button.

Purpose:

- Users must agree to the Terms of Service, Privacy Policy, and Disclaimer before submitting the form.
- This creates clearer acceptance before 3P receives business/contact information.

Checkbox language:

```html
I agree to the 3P Help Me Terms of Service, Privacy Policy, and Disclaimer.