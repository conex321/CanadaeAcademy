# Contact Form

## Overview
- **Form Name:** Contact Form
- **Form ID:** `wpcf7-f21440-p15-o1`
- **Location:** https://www.ontariovirtualschool.ca/contact-us/
- **Purpose:** Primary contact form for all inquiries (students, parents, guidance counsellors)

---

## Technology Stack

| Component | Value |
|-----------|-------|
| Plugin | Contact Form 7 |
| Platform | WordPress |
| Submission | AJAX (no page reload) |
| Endpoint | `/wp-admin/admin-ajax.php` |
| Action | `wpcf7_submit` |
| Method | POST |
| Encoding | multipart/form-data |

---

## Form Fields

### 1. Your Name
```html
<input type="text" name="your-name" required />
```
| Property | Value |
|----------|-------|
| Type | text |
| Required | Yes |
| Validation | Min 1 character |
| Error Message | "This field is required." |

---

### 2. Your Email
```html
<input type="email" name="your-email" required />
```
| Property | Value |
|----------|-------|
| Type | email |
| Required | Yes |
| Validation | Valid email format |
| Error Message | "Please enter a valid email address." |

---

### 3. Your Phone Number
```html
<input type="tel" name="your-phone" />
```
| Property | Value |
|----------|-------|
| Type | tel |
| Required | No |
| Validation | Phone format (optional) |

---

### 4. I am a... (User Profile Type)
```html
<select name="user-profile-type" required>
  <option value="">— Please choose an option —</option>
  <option value="Student">Student</option>
  <option value="Parent/Guardian">Parent/Guardian</option>
  <option value="Guidance Counsellor">Guidance Counsellor</option>
  <option value="Other">Other</option>
</select>
```
| Property | Value |
|----------|-------|
| Type | select |
| Required | Yes |
| Triggers Conditional Fields | Yes |
| Error Message | "Please select an option." |

**Conditional Logic:**
- If "Student" or "Parent/Guardian" → Show Student Type & Grade fields
- If "Parent/Guardian" → Show Student Name field
- If "Other" → Show "Please Specify" text field

---

### 5. Student Name (Conditional)
```html
<input type="text" name="user-profile-student-name" />
```
| Property | Value |
|----------|-------|
| Type | text |
| Required | No |
| Condition | Shows when "Parent/Guardian" is selected |

---

### 6. Student Type (Conditional)
```html
<select name="user-profile-student-type">
  <option value="">— Please choose an option —</option>
  <option value="Full-Time OVS Student">Full-Time OVS Student</option>
  <option value="Part-Time Student">Part-Time Student</option>
  <option value="International Student">International Student</option>
  <option value="Adult Learner">Adult Learner</option>
</select>
```
| Property | Value |
|----------|-------|
| Type | select |
| Required | No |
| Condition | Shows when "Student" or "Parent/Guardian" is selected |

---

### 7. Student Grade (Conditional)
```html
<select name="user-profile-student-grade">
  <option value="">— Please choose an option —</option>
  <option value="Grade 8">Grade 8</option>
  <option value="Grade 9">Grade 9</option>
  <option value="Grade 10">Grade 10</option>
  <option value="Grade 11">Grade 11</option>
  <option value="Grade 12">Grade 12</option>
  <option value="Adult Learner">Adult Learner</option>
  <option value="Other">Other</option>
</select>
```
| Property | Value |
|----------|-------|
| Type | select |
| Required | No |
| Condition | Shows when "Student" or "Parent/Guardian" is selected |

---

### 8. Please Specify (Other Profile - Conditional)
```html
<input type="text" name="user-profile-other" placeholder="Please specify your role" />
```
| Property | Value |
|----------|-------|
| Type | text |
| Required | No |
| Condition | Shows when "Other" is selected in profile type |

---

### 9. Contact Reason
```html
<select name="contact-reason" required>
  <option value="">— Please choose an option —</option>
  <option value="Course Information">Course Information</option>
  <option value="Guidance/Student Support">Guidance/Student Support</option>
  <option value="Technical Support">Technical Support</option>
  <option value="International Student Inquiries">International Student Inquiries</option>
  <option value="Billing/Payments">Billing/Payments</option>
  <option value="Other">Other</option>
</select>
```
| Property | Value |
|----------|-------|
| Type | select |
| Required | Yes |
| Triggers Conditional | Yes (shows "Other" text field) |
| Error Message | "Please select a contact reason." |

---

### 10. Please Specify Reason (Conditional)
```html
<input type="text" name="contact-reason-other" placeholder="Please specify your reason for contacting us" />
```
| Property | Value |
|----------|-------|
| Type | text |
| Required | No |
| Condition | Shows when "Other" is selected in contact reason |

---

### 11. How did you hear about us?
```html
<select name="hear-about-us">
  <option value="">— Please choose an option —</option>
  <option value="Search Engine (e.g. Google)">Search Engine (e.g. Google)</option>
  <option value="Social Media (e.g. Facebook, Twitter, Instagram)">Social Media</option>
  <option value="Brochure or Printed Materials">Brochure or Printed Materials</option>
  <option value="Friends or Family">Friends or Family</option>
  <option value="School/Guidance Counsellor">School/Guidance Counsellor</option>
  <option value="Another Online School">Another Online School</option>
  <option value="Returning Student">Returning Student</option>
  <option value="Other">Other</option>
</select>
```
| Property | Value |
|----------|-------|
| Type | select |
| Required | No |
| Purpose | Marketing analytics |

---

### 12. Your Message
```html
<textarea name="contact-message" rows="10" cols="40" required></textarea>
```
| Property | Value |
|----------|-------|
| Type | textarea |
| Required | Yes |
| Rows | 10 |
| Validation | Min 10 characters |
| Error Message | "Please enter your message." |

---

### 13. Website (Honeypot - Hidden)
```html
<input type="text" name="website" style="display:none" />
```
| Property | Value |
|----------|-------|
| Type | text |
| Hidden | Yes (CSS display:none) |
| Purpose | Spam protection honeypot |
| Behavior | If filled, submission is rejected |

---

## Submit Button
```html
<input type="submit" value="Send Message" />
```

---

## Form Behavior

### Submission Flow
```
1. User fills form
2. User clicks "Send Message"
3. Client-side validation runs
   ├── If invalid → Show errors, highlight fields
   └── If valid → Continue to step 4
4. AJAX POST to /wp-admin/admin-ajax.php
5. Server-side validation
   ├── If honeypot filled → Reject silently
   ├── If invalid → Return errors
   └── If valid → Continue to step 6
6. Send email notification to admin
7. Return success response
8. Show success message
9. Reset form fields
```

### Success Response
- Message: "Thank you for your message. It has been sent."
- Form resets to empty state
- Page scrolls to show success message

### Error Response
- Invalid fields are highlighted with red border
- Error messages appear below each invalid field
- Page scrolls to first error

---

## Spam Protection

| Method | Status | Description |
|--------|--------|-------------|
| Honeypot | ✅ Enabled | Hidden "website" field |
| reCAPTCHA | ❌ Disabled | Not implemented |
| Akismet | ❌ Disabled | Not integrated |

---

## Email Notification

When form is submitted successfully:
- **To:** admin@ontariovirtualschool.ca
- **Subject:** [OVS Contact] New message from [your-name]
- **Body:** All form field values

---

## CSS Classes

| Element | Class |
|---------|-------|
| Form | `wpcf7-form` |
| Text Input | `wpcf7-form-control wpcf7-text` |
| Email Input | `wpcf7-form-control wpcf7-email` |
| Select | `wpcf7-form-control wpcf7-select` |
| Textarea | `wpcf7-form-control wpcf7-textarea` |
| Required Field | `wpcf7-validates-as-required` |
| Invalid Field | `wpcf7-not-valid` |
| Submit Button | `wpcf7-form-control wpcf7-submit` |
| Success Message | `wpcf7-mail-sent-ok` |
| Error Message | `wpcf7-not-valid-tip` |

---

## Rebuild Instructions

To rebuild this form in Contact Form 7:

```
[text* your-name]
[email* your-email]
[tel your-phone]
[select* user-profile-type include_blank "Student" "Parent/Guardian" "Guidance Counsellor" "Other"]
[text user-profile-student-name]
[select user-profile-student-type include_blank "Full-Time OVS Student" "Part-Time Student" "International Student" "Adult Learner"]
[select user-profile-student-grade include_blank "Grade 8" "Grade 9" "Grade 10" "Grade 11" "Grade 12" "Adult Learner" "Other"]
[text user-profile-other]
[select* contact-reason include_blank "Course Information" "Guidance/Student Support" "Technical Support" "International Student Inquiries" "Billing/Payments" "Other"]
[text contact-reason-other]
[select hear-about-us include_blank "Search Engine (e.g. Google)" "Social Media (e.g. Facebook, Twitter, Instagram)" "Brochure or Printed Materials" "Friends or Family" "School/Guidance Counsellor" "Another Online School" "Returning Student" "Other"]
[textarea* contact-message]
[text website class:hidden]
[submit "Send Message"]
```

**Note:** Conditional logic requires additional JavaScript or the "Conditional Fields for Contact Form 7" plugin.
