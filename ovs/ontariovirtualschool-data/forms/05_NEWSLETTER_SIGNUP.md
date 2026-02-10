# Newsletter Signup Form

## Overview
- **Form Name:** Newsletter Signup
- **Provider:** Mailchimp
- **Location:** Footer, Newsletter pages
- **Purpose:** Email newsletter subscription

---

## Technology Stack

| Component | Value |
|-----------|-------|
| Platform | Mailchimp |
| Integration | Embedded form |
| Submission | POST to Mailchimp servers |
| Double Opt-in | Yes |

---

## Form Structure

### HTML Template
```html
<!-- Begin Mailchimp Signup Form -->
<div id="mc_embed_signup">
  <form
    action="https://ontariovirtualschool.us##.list-manage.com/subscribe/post?u=XXXXXX&amp;id=XXXXXX"
    method="post"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    class="validate"
    target="_blank"
    novalidate
  >
    <div id="mc_embed_signup_scroll">
      <h2>Subscribe to Our Newsletter</h2>

      <!-- Email Field (Required) -->
      <div class="mc-field-group">
        <label for="mce-EMAIL">
          Email Address <span class="asterisk">*</span>
        </label>
        <input
          type="email"
          value=""
          name="EMAIL"
          class="required email"
          id="mce-EMAIL"
          placeholder="Enter your email address"
          required
        />
      </div>

      <!-- First Name Field (Optional) -->
      <div class="mc-field-group">
        <label for="mce-FNAME">First Name</label>
        <input
          type="text"
          value=""
          name="FNAME"
          id="mce-FNAME"
          placeholder="First Name (optional)"
        />
      </div>

      <!-- Honeypot Bot Protection -->
      <div style="position: absolute; left: -5000px;" aria-hidden="true">
        <input
          type="text"
          name="b_XXXXXX_XXXXXX"
          tabindex="-1"
          value=""
        />
      </div>

      <!-- Submit Button -->
      <div class="clear">
        <input
          type="submit"
          value="Subscribe"
          name="subscribe"
          id="mc-embedded-subscribe"
          class="button"
        />
      </div>

    </div>
  </form>
</div>
<!-- End Mailchimp Signup Form -->
```

---

## Form Fields

### 1. Email Address (Required)
```html
<input type="email" name="EMAIL" class="required email" required />
```

| Property | Value |
|----------|-------|
| Name | `EMAIL` |
| Type | email |
| Required | ✅ Yes |
| Validation | Valid email format |
| Placeholder | "Enter your email address" |

---

### 2. First Name (Optional)
```html
<input type="text" name="FNAME" />
```

| Property | Value |
|----------|-------|
| Name | `FNAME` |
| Type | text |
| Required | ❌ No |
| Max Length | 50 characters |

---

### 3. Last Name (Optional)
```html
<input type="text" name="LNAME" />
```

| Property | Value |
|----------|-------|
| Name | `LNAME` |
| Type | text |
| Required | ❌ No |
| Max Length | 50 characters |

---

### 4. Honeypot Field (Hidden)
```html
<input type="text" name="b_XXXXXX_XXXXXX" tabindex="-1" style="position:absolute;left:-5000px;" />
```

| Property | Value |
|----------|-------|
| Purpose | Bot/spam protection |
| Visibility | Hidden (CSS) |
| Behavior | If filled, submission rejected |

---

## Submission Flow

```
1. User enters email address
2. (Optional) User enters name
3. User clicks "Subscribe"
4. Form POSTs to Mailchimp
5. Mailchimp validates submission
   ├── If honeypot filled → Reject silently
   ├── If invalid email → Show error
   └── If valid → Continue
6. Mailchimp sends confirmation email (double opt-in)
7. User clicks confirmation link in email
8. User added to mailing list
```

---

## Double Opt-in Process

```
┌─────────────────┐
│  User submits   │
│  email address  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Mailchimp      │
│  sends confirm  │
│  email          │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  User clicks    │
│  "Confirm       │
│  Subscription"  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  User added to  │
│  mailing list   │
└─────────────────┘
```

---

## Spam Protection

| Method | Status | Description |
|--------|--------|-------------|
| Honeypot | ✅ Enabled | Hidden field bots fill |
| Double Opt-in | ✅ Enabled | Requires email confirmation |
| reCAPTCHA | ❌ Disabled | Not implemented |

---

## Styling (CSS)

```css
#mc_embed_signup {
  background: #fff;
  clear: left;
  font: 14px Helvetica, Arial, sans-serif;
  width: 100%;
}

#mc_embed_signup .mc-field-group {
  padding-bottom: 15px;
  min-height: 50px;
}

#mc_embed_signup label {
  display: block;
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 10px;
}

#mc_embed_signup input.email {
  border: 1px solid #ABB0B2;
  border-radius: 3px;
  color: #343434;
  display: block;
  font-size: 15px;
  height: 32px;
  padding: 0 0.4em;
  width: 100%;
}

#mc_embed_signup .button {
  background-color: #007bff;
  border: none;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  height: 36px;
  padding: 0 22px;
}

#mc_embed_signup .button:hover {
  background-color: #0056b3;
}
```

---

## Mailchimp Configuration

### Required Settings
1. **List/Audience ID** - Found in Audience → Settings
2. **Form Action URL** - Audience → Signup forms → Embedded forms
3. **Honeypot Field Name** - Generated automatically

### Getting the Embed Code
1. Log into Mailchimp
2. Go to Audience → Signup forms
3. Select "Embedded forms"
4. Choose "Classic" form
5. Copy the HTML code

---

## GDPR Compliance

### Privacy Notice
Add text below form:
```html
<p class="privacy-notice">
  By subscribing, you agree to receive marketing emails from Ontario Virtual School.
  Read our <a href="/privacy-policy/">Privacy Policy</a>.
</p>
```

### Unsubscribe
- All emails include unsubscribe link
- Managed by Mailchimp automatically

---

## Newsletter Content

| Content Type | Frequency |
|--------------|-----------|
| New Course Announcements | As needed |
| Student Success Stories | Monthly |
| Educational Tips | Monthly |
| Promotional Offers | Occasional |

**Typical Frequency:** Monthly

---

## Footer Placement

### Example Layout
```
┌─────────────────────────────────────────┐
│              FOOTER                     │
├─────────────────────────────────────────┤
│  NEWSLETTER                             │
│  ───────────                            │
│  Stay updated with OVS news!            │
│                                         │
│  [Email Address________________]        │
│  [Subscribe]                            │
│                                         │
│  By subscribing, you agree to our       │
│  Privacy Policy.                        │
└─────────────────────────────────────────┘
```

---

## Rebuild Instructions

### Step 1: Create Mailchimp Account
1. Go to https://mailchimp.com
2. Sign up for free account
3. Create new Audience (list)

### Step 2: Get Embed Code
1. Audience → Signup forms → Embedded forms
2. Select "Classic" style
3. Customize fields (Email required, Name optional)
4. Copy generated HTML

### Step 3: Add to Website
- Paste in footer template
- Or use Mailchimp WordPress plugin

### Step 4: Customize Styling
- Modify CSS to match site design
- Ensure mobile responsive

### Step 5: Configure Double Opt-in
1. Audience → Settings → Audience name and defaults
2. Enable double opt-in
3. Customize confirmation email

### Step 6: Test
1. Submit test email
2. Check confirmation email received
3. Click confirm link
4. Verify added to list
