# Ontario Virtual School - Forms & Interactive Elements Documentation

## Technology Stack Overview

| Component | Technology | Purpose |
|-----------|------------|---------|
| CMS | WordPress | Content management |
| E-commerce | WooCommerce | Course registration & payments |
| Forms | Contact Form 7 | Contact forms |
| Chat | Crisp | Live support |
| UI Framework | Material-UI (MUI/React) | Course filtering & search |
| Email Marketing | Mailchimp | Newsletter subscriptions |

---

## 1. Contact Form

**Location:** https://www.ontariovirtualschool.ca/contact-us/

### Technology
- **Plugin:** Contact Form 7 (WordPress)
- **Submission:** AJAX (no page reload)
- **Handler:** `/wp-admin/admin-ajax.php`
- **Action:** `wpcf7_submit`

### Form Fields

| Field | Name | Type | Required | Validation |
|-------|------|------|----------|------------|
| Your Name | `your-name` | text | ✅ | Min length |
| Your Email | `your-email` | email | ✅ | Email format |
| Phone Number | `your-phone` | tel | ❌ | Phone format |
| I am a... | `user-profile-type` | select | ✅ | Must select option |
| Student Name | `user-profile-student-name` | text | ❌ | Conditional |
| Student Type | `user-profile-student-type` | select | ❌ | Conditional |
| Student Grade | `user-profile-student-grade` | select | ❌ | Conditional |
| Contact Reason | `contact-reason` | select | ✅ | Must select option |
| Other Reason | `contact-reason-other` | text | ❌ | Conditional |
| How did you hear? | `hear-about-us` | select | ❌ | Optional |
| Your Message | `contact-message` | textarea | ✅ | Min length |
| Website | `website` | hidden | ❌ | Honeypot spam trap |

### Dropdown Options

**I am a... (`user-profile-type`):**
- Student
- Parent/Guardian
- Guidance Counsellor
- Other

**Student Grade (`user-profile-student-grade`):**
- Grade 8
- Grade 9
- Grade 10
- Grade 11
- Grade 12
- Adult Learner
- Other

**Contact Reason (`contact-reason`):**
- Course Information
- Guidance/Student Support
- Technical Support
- International Student Inquiries
- Billing/Payments
- Other

**How did you hear about us? (`hear-about-us`):**
- Search Engine (e.g. Google)
- Social Media (e.g. Facebook, Twitter, Instagram)
- Brochure or Printed Materials
- Friends or Family
- School/Guidance Counsellor
- Another Online School
- Returning Student
- Other

### Form Behavior

```
User Action                    → System Response
─────────────────────────────────────────────────
Submit with valid data         → AJAX POST to server
                               → Show success message
                               → Reset form fields
                               → Email sent to admin

Submit with invalid data       → Highlight invalid fields
                               → Show inline error messages
                               → Prevent submission

Select "Student" profile       → Show student-specific fields
                               → (Grade, Student Type)

Select "Other" option          → Show text field for details

Bot fills honeypot field       → Submission silently rejected
```

### Spam Protection
- **Honeypot Field:** Hidden "website" field that bots auto-fill
- **Server Validation:** All required fields validated server-side
- **Rate Limiting:** Possible via WordPress/CF7 settings

---

## 2. Course Search & Filtering

**Location:** Homepage, /courses/

### Technology
- **Framework:** Material-UI (MUI) with React
- **Component:** MuiAutocomplete
- **Behavior:** Real-time filtering without page reload

### Search Features

| Feature | Description |
|---------|-------------|
| Autocomplete | Type-ahead suggestions as user types |
| Course Code Search | Search by course codes (e.g., "SBI3U") |
| Course Name Search | Search by full course names |
| Instant Results | Results update dynamically |
| Clear Button | One-click to clear search |

### Course Filters

| Filter | Options |
|--------|---------|
| Grade Level | Grade 9, 10, 11, 12 |
| Subject | Math, Science, English, Business, etc. |
| Credit Type | University (U), College (C), Mixed (M), Open (O) |
| Course Type | Full Credit, Half Credit |

### How It Works

```javascript
// Pseudocode representation
1. User types in search box
2. React component captures input
3. Filter courses array based on input
4. Update displayed courses in real-time
5. No server request needed (client-side filtering)
```

---

## 3. Registration/Checkout System

**Location:** https://www.ontariovirtualschool.ca/register-online/

### Technology
- **Platform:** WooCommerce (WordPress)
- **Payment:** Square (primary)
- **Process:** Multi-step checkout

### Registration Flow

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Browse    │ ──▶ │   Add to    │ ──▶ │   View      │
│   Courses   │     │   Cart      │     │   Cart      │
└─────────────┘     └─────────────┘     └─────────────┘
                                              │
                                              ▼
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Order     │ ◀── │   Payment   │ ◀── │  Checkout   │
│   Confirm   │     │   Process   │     │   Form      │
└─────────────┘     └─────────────┘     └─────────────┘
```

### Pricing Structure

| Course Type | Price |
|-------------|-------|
| Single Course | $399 - $449 |
| Partial Credit | $150 - $299 |
| Bundle Packages | $574+ |

### Checkout Form Fields

**Student Information:**
- Full Legal Name
- Date of Birth
- Email Address
- Phone Number
- Current School
- Ontario Education Number (OEN)

**Parent/Guardian Information:**
- Parent Name
- Parent Email
- Parent Phone

**Billing Information:**
- Billing Address
- City, Province, Postal Code
- Country

**Payment Information:**
- Credit/Debit Card (via Square)
- Card Number, Expiry, CVV

### Payment Processing
- **Gateway:** Square
- **Security:** PCI-DSS compliant
- **Currency:** CAD
- **Methods:** Credit Card, Debit Card

---

## 4. Live Chat (Crisp)

**Location:** All pages (bottom-right corner)

### Technology
- **Platform:** Crisp Chat
- **Type:** JavaScript widget
- **Load:** Asynchronous (doesn't block page)

### Features

| Feature | Description |
|---------|-------------|
| Live Chat | Real-time messaging with support staff |
| Offline Mode | Leave messages when staff unavailable |
| File Sharing | Send/receive attachments |
| Chat History | Persistent across sessions |
| Mobile Responsive | Works on all devices |
| Proactive Messages | Automated greeting messages |

### Behavior

```
Visitor arrives on site
       │
       ▼
Chat bubble appears (bottom-right)
       │
       ▼
Click to open chat window
       │
       ├── Staff Online ──▶ Live conversation
       │
       └── Staff Offline ──▶ Leave message form
                            (Name, Email, Message)
```

### Integration
- Connected to OVS support team dashboard
- Email notifications for offline messages
- Visitor tracking and analytics

---

## 5. Newsletter Signup

**Location:** Footer, Newsletter pages

### Technology
- **Platform:** Mailchimp
- **Integration:** Embedded form

### Form Fields

| Field | Required |
|-------|----------|
| Email Address | ✅ |
| First Name | ❌ |

### Behavior
- User enters email
- Validates email format
- Submits to Mailchimp
- Shows confirmation message
- User added to mailing list

---

## 6. WordPress Search

**Location:** Header (if enabled)

### Technology
- **Type:** WordPress default search
- **Action:** `/?s=searchterm`
- **Method:** GET

### Features
- Site-wide content search
- Searches pages and posts
- Returns relevance-sorted results

---

## Form Security Measures

| Measure | Implementation |
|---------|----------------|
| CSRF Protection | WordPress nonce tokens |
| Honeypot Fields | Hidden fields for bot detection |
| Input Sanitization | Server-side data cleaning |
| Rate Limiting | Request throttling |
| SSL/TLS | HTTPS encryption |
| PCI Compliance | Square payment processing |

---

## API Endpoints

### Contact Form 7
```
POST /wp-admin/admin-ajax.php
Content-Type: multipart/form-data

Parameters:
- action: wpcf7_submit
- _wpcf7: form_id
- _wpcf7_unit_tag: unit_tag
- [form fields...]
```

### WooCommerce Cart
```
POST /?wc-ajax=add_to_cart
Content-Type: application/x-www-form-urlencoded

Parameters:
- product_id: course_product_id
- quantity: 1
```

### Course Search (Client-side)
```
// React state management
// No external API - client-side filtering
const filteredCourses = courses.filter(course =>
    course.name.includes(searchTerm) ||
    course.code.includes(searchTerm)
);
```

---

## Mobile Responsiveness

All forms are mobile-responsive:
- Stacked layouts on small screens
- Touch-friendly input fields
- Appropriate keyboard types (email, tel)
- Chat widget adapts to screen size

---

## Accessibility Features

- ARIA labels on form inputs
- Error messages associated with fields
- Focus management
- Keyboard navigation support
- Color contrast compliance
