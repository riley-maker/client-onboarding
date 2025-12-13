# Client Onboarding Form - Kelp Copy

A professional client onboarding form for your email marketing agency.

## 🚀 Quick Deploy to Vercel (15 min)

### Step 1: Set Up Formspree (Free - for receiving submissions)

1. Go to [formspree.io](https://formspree.io) and sign up (free)
2. Click "New Form" and name it "Client Onboarding"
3. Copy your Form ID (looks like `xyzabcde`)
4. Open `app/page.js` and replace `YOUR_FORMSPREE_ID` with your actual ID:
   ```javascript
   const FORMSPREE_ID = 'xyzabcde'  // Your actual ID here
   ```

**What you get with Formspree free tier:**
- 50 submissions/month
- Email notifications for each submission
- Dashboard to view all responses
- Spam filtering

### Step 2: Push to GitHub

1. Create a new GitHub repository at [github.com/new](https://github.com/new)
2. Name it something like `client-onboarding`
3. In your terminal, navigate to this folder and run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/client-onboarding.git
git push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click "Add New Project"
3. Import your `client-onboarding` repository
4. Click "Deploy" (default settings are fine)
5. Wait ~1 minute for deployment

**Done!** You'll get a URL like `client-onboarding.vercel.app`

### Step 4: (Optional) Custom Domain

If you want something like `onboarding.kelpcopy.com`:

1. In Vercel dashboard → your project → Settings → Domains
2. Add your custom domain
3. Update your DNS records as instructed

---

## 📬 How Submissions Work

When a client submits the form:

1. **You get an email** with all their responses (to whatever email you used for Formspree)
2. **View in dashboard** at formspree.io/forms → your form → Submissions
3. **Export to CSV** anytime from the Formspree dashboard

### Email Notification Format

You'll receive an email with subject: `New Onboarding: [Company Name]`

Contains all form fields:
- Contact info
- Communication preference
- Shopify URL & collaborator code
- Klaviyo status
- Brand assets links
- Discount preferences
- Partnership goals

---

## 📁 Project Structure

```
onboarding-form-app/
├── app/
│   ├── layout.js    # App layout + fonts
│   └── page.js      # Main form (edit FORMSPREE_ID here)
├── package.json     # Dependencies
├── next.config.js   # Next.js config
└── README.md        # This file
```

---

## 🔧 Customization

### Change Your Contact Info

In `app/page.js`, search for `riley@kelpcopy.com` and `(661) 210-5536` to update.

### Change Colors

Main colors are defined inline. Key values:
- Gold accent: `#c9a227`
- Dark text: `#2d2926`
- Background: `#f8f6f3`

### Add/Remove Form Fields

Edit the `formData` state object and add corresponding JSX in the step sections.

---

## 💰 Upgrade Options

### More Submissions (Formspree)
- Free: 50/month
- $10/month: 250/month + file uploads
- $40/month: 1,000/month + integrations

### Alternative: Send to Google Sheets
Replace Formspree with a Google Apps Script to send directly to a spreadsheet. Let me know if you want this setup instead.

### Alternative: Send to Notion
Use Make.com or Zapier to pipe Formspree submissions into a Notion database.

---

## 🆘 Troubleshooting

**Form not submitting?**
- Check browser console for errors
- Verify your Formspree ID is correct
- Make sure you're not on localhost (Formspree needs real domain)

**Not receiving emails?**
- Check spam folder
- Verify email in Formspree settings
- Check Formspree dashboard - submissions may be there even if email failed

**Deploy failing?**
- Make sure all files are committed to git
- Check Vercel build logs for specific errors

---

## 📞 Support

Questions about setup? Reach out to Claude or check:
- [Vercel Docs](https://vercel.com/docs)
- [Formspree Docs](https://help.formspree.io)
- [Next.js Docs](https://nextjs.org/docs)
