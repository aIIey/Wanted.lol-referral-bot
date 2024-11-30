# Wanted.lol Referral Bot

This is a simple script that exploits a referral vulnerability in the `wanted.lol` registration page. It automatically fills in a referral code and submits the registration form when visiting the registration page.

**Note:** This project was created to highlight a potential vulnerability in the `wanted.lol` site and is intended for educational purposes only. Do not use this for malicious intent.

---

## Features
- Automatically fills in a referral code on the `https://wanted.lol/register` page.
- Submits the registration form without manual intervention.
- Runs immediately when the registration page is visited.
  
## How to Use

### Step 1: Modify the Referral Code
1. Open the `content.js` file in your project.
2. Change the referral code value to your own. The referral code is stored in this line of code:
   ```javascript
   const referralCode = 'WANTED-NxCrG1laq6u7';
   ```
   Replace `'WANTED-NxCrG1laq6u7'` with your own referral code.

### Step 2: Load the Script in Your Browser
1. Open your browser's developer tools.
2. Go to the "Extensions" section and enable "Developer Mode."
3. Load the project as an unpacked extension.
4. Visit `https://wanted.lol/register`, and the script will automatically execute, filling in your referral code and submitting the form.

### Important Notes
- **Do not modify the sleep time** in the script. The sleep intervals are optimized for the Cloudflare captcha to not interfere with the registration process. Faster execution may break the functionality.
  
## Disclaimer
This project is purely for educational purposes. It was created to demonstrate a vulnerability on the `wanted.lol` website. Please use responsibly and do not engage in any malicious activities.

---

**Creator:** @decal.

