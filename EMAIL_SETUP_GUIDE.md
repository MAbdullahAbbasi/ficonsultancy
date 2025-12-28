# Email Setup Guide for Contact Form

This guide will help you configure the contact form to send emails to **info@ficonsultancy.net** when someone submits the form.

## Option 1: Using EmailJS (Recommended - Free & Easy)

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

### Step 2: Add Email Service
1. Go to https://dashboard.emailjs.com/admin
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection steps to link your email account
5. **Important**: Use **info@ficonsultancy.net** as the service email
6. Copy the **Service ID** (you'll need this)

### Step 3: Create Email Template
1. Go to https://dashboard.emailjs.com/admin/template
2. Click "Create New Template"
3. Set the following:
   - **Template Name**: Contact Form Submission
   - **Subject**: New Contact Form Submission - FI Consultancy
   - **Content**: Copy the template below

**Email Template Content:**
```
New Contact Form Submission

From: {{from_name}}
Email: {{user_email}}

First Name: {{first_name}}
Last Name: {{last_name}}
Email: {{user_email}}

Message:
{{message}}

---
This email was sent from the FI Consultancy website contact form.
Reply to: {{reply_to}}
```

4. Set **To Email**: info@ficonsultancy.net
5. Set **From Name**: {{from_name}}
6. Set **Reply To**: {{reply_to}}
7. Click "Save"
8. Copy the **Template ID** (you'll need this)

### Step 4: Get Your Public Key
1. Go to https://dashboard.emailjs.com/admin/integration
2. Copy your **Public Key**

### Step 5: Update contact.js
Open `scripts/contact.js` and replace:
- `"YOUR_SERVICE_ID"` with your Service ID from Step 2
- `"YOUR_TEMPLATE_ID"` with your Template ID from Step 3
- Update the Public Key in `emailjs.init("YOUR_PUBLIC_KEY")` if different

### Step 6: Test the Form
1. Open your website
2. Go to the Contact page
3. Fill out and submit the form
4. Check info@ficonsultancy.net for the email

---

## Option 2: Using Formspree (Alternative - Also Free)

If you prefer not to use EmailJS, you can use Formspree:

1. Go to https://formspree.io/
2. Sign up for a free account
3. Create a new form
4. Set the email to: info@ficonsultancy.net
5. Copy your Formspree endpoint
6. Update `pages/contact.html` form action to:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" id="contactForm">
   ```
7. Remove or comment out the EmailJS script and contact.js form handler

---

## Option 3: Using PHP (If you have PHP hosting)

If your hosting supports PHP, I can create a PHP script to handle form submissions. Let me know if you'd like this option.

---

## Troubleshooting

### Emails not sending?
1. Check browser console for errors (F12 → Console)
2. Verify Service ID and Template ID are correct
3. Make sure EmailJS service is connected and active
4. Check EmailJS dashboard for any error logs

### Need help?
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com

---

**Current Configuration:**
- EmailJS Public Key: ho2gKdtfUB9Oq8Lu1 (already in code)
- Target Email: info@ficonsultancy.net
- Form Fields: First Name, Last Name, Email, Message

