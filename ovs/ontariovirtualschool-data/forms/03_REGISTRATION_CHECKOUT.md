# Registration & Checkout System

## Overview
- **System Name:** Course Registration & Checkout
- **Location:** /register-online/, /register-online/checkout/
- **Purpose:** E-commerce system for course purchases and student registration
- **Payment Gateway:** Square

---

## Technology Stack

| Component | Value |
|-----------|-------|
| Platform | WordPress |
| E-commerce | WooCommerce 8.x |
| Payment Gateway | Square |
| SSL | Yes (HTTPS) |
| PCI Compliant | Yes |

---

## Pricing Structure

| Course Type | Price Range (CAD) |
|-------------|-------------------|
| Single Course | $399 - $449 |
| Partial Credit | $150 - $299 |
| Bundle Packages | $574+ |

**Discount Features:**
- Coupon codes
- Bulk discounts
- Returning student discounts

---

## Checkout Flow

```
┌─────────────────┐
│  1. Browse      │
│  Courses        │
│  /courses/      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  2. Add to      │
│  Cart (AJAX)    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  3. View Cart   │
│  /register-     │
│  online/        │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  4. Checkout    │
│  /checkout/     │
│  • Student Info │
│  • Parent Info  │
│  • Billing      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  5. Payment     │
│  (Square)       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  6. Order       │
│  Confirmation   │
│  /order-        │
│  received/      │
└─────────────────┘
```

---

## Cart Functionality

### Add to Cart (AJAX)
```javascript
// AJAX request when "Add to Cart" clicked
jQuery.ajax({
  type: 'POST',
  url: wc_add_to_cart_params.ajax_url,
  data: {
    action: 'woocommerce_ajax_add_to_cart',
    product_id: productId,
    quantity: 1
  },
  success: function(response) {
    // Update mini-cart
    // Show success message
  }
});
```

### Cart Features
| Feature | Description |
|---------|-------------|
| Quantity Adjustment | Change course quantity |
| Remove Items | X button to remove |
| Coupon Codes | Input field + Apply button |
| Cart Totals | Subtotal, discounts, taxes, total |
| Mini Cart | Dropdown in header |

---

## Checkout Form Sections

### Section 1: Student Information

| Field | Name | Type | Required | Validation |
|-------|------|------|----------|------------|
| First Name | `student_first_name` | text | ✅ | Min 2 chars |
| Last Name | `student_last_name` | text | ✅ | Min 2 chars |
| Email | `student_email` | email | ✅ | Valid email |
| Phone | `student_phone` | tel | ✅ | Valid phone |
| Date of Birth | `student_dob` | date | ✅ | Valid date |
| OEN | `student_oen` | text | ❌ | 9 digits |
| Current School | `current_school` | text | ❌ | - |
| Grade | `student_grade` | select | ✅ | Must select |

**Grade Options:**
- Grade 8
- Grade 9
- Grade 10
- Grade 11
- Grade 12
- Adult Learner

---

### Section 2: Parent/Guardian Information
*Conditional: Shows when student is under 18*

| Field | Name | Type | Required |
|-------|------|------|----------|
| First Name | `parent_first_name` | text | ✅ |
| Last Name | `parent_last_name` | text | ✅ |
| Email | `parent_email` | email | ✅ |
| Phone | `parent_phone` | tel | ✅ |
| Relationship | `relationship` | select | ✅ |

**Relationship Options:**
- Mother
- Father
- Guardian
- Other

---

### Section 3: Billing Information

| Field | Name | Type | Required |
|-------|------|------|----------|
| First Name | `billing_first_name` | text | ✅ |
| Last Name | `billing_last_name` | text | ✅ |
| Company | `billing_company` | text | ❌ |
| Address Line 1 | `billing_address_1` | text | ✅ |
| Address Line 2 | `billing_address_2` | text | ❌ |
| City | `billing_city` | text | ✅ |
| Province | `billing_state` | select | ✅ |
| Postal Code | `billing_postcode` | text | ✅ |
| Country | `billing_country` | select | ✅ |
| Email | `billing_email` | email | ✅ |
| Phone | `billing_phone` | tel | ✅ |

**Province Options:**
- Ontario, Quebec, British Columbia, Alberta, Manitoba, Saskatchewan
- Nova Scotia, New Brunswick, Newfoundland and Labrador, Prince Edward Island
- Northwest Territories, Yukon, Nunavut

---

### Section 4: Payment Information (Square)

| Field | Type | Rendered By |
|-------|------|-------------|
| Card Number | credit_card | Square SDK |
| Expiry Date | MM/YY | Square SDK |
| CVV | 3-4 digits | Square SDK |
| Billing Postal | text | Square SDK |

**Accepted Cards:**
- Visa
- Mastercard
- American Express
- Discover

**Security:**
- Card data never touches server
- Tokenization via Square SDK
- PCI-DSS compliant

---

### Section 5: Terms & Conditions

| Field | Name | Type | Required |
|-------|------|------|----------|
| Terms | `terms_accepted` | checkbox | ✅ |
| Privacy | `privacy_accepted` | checkbox | ✅ |

---

## Form HTML Structure

```html
<form name="checkout" method="post" class="checkout woocommerce-checkout">

  <!-- Student Information -->
  <div class="woocommerce-billing-fields">
    <h3>Student Information</h3>
    <div class="woocommerce-billing-fields__field-wrapper">
      <p class="form-row">
        <label for="student_first_name">First Name <abbr>*</abbr></label>
        <input type="text" name="student_first_name" id="student_first_name" required />
      </p>
      <!-- ... more fields -->
    </div>
  </div>

  <!-- Payment -->
  <div id="payment" class="woocommerce-checkout-payment">
    <div id="square-card-container">
      <!-- Square SDK renders card fields here -->
    </div>
  </div>

  <!-- Terms -->
  <div class="woocommerce-terms-and-conditions-wrapper">
    <p class="form-row">
      <input type="checkbox" name="terms_accepted" id="terms" required />
      <label for="terms">I agree to the Terms and Conditions</label>
    </p>
  </div>

  <!-- Submit -->
  <button type="submit" class="button" name="woocommerce_checkout_place_order">
    Place Order
  </button>

</form>
```

---

## Square Payment Integration

### SDK Initialization
```javascript
const payments = Square.payments(applicationId, locationId);

const card = await payments.card();
await card.attach('#square-card-container');

// On form submit
const tokenResult = await card.tokenize();
if (tokenResult.status === 'OK') {
  // Send token to server for processing
  document.getElementById('card-token').value = tokenResult.token;
  form.submit();
}
```

### Server-Side Processing
```php
// WooCommerce handles payment via Square gateway
// Token received from client is processed
// Payment captured via Square API
// Order status updated to "Processing"
```

---

## Validation

### Client-Side
- HTML5 validation attributes
- JavaScript validation on blur
- Real-time feedback

### Server-Side
- WooCommerce validation hooks
- Custom field validation
- Sanitization of all inputs

---

## Order Confirmation

### Page Content (/order-received/)
- Order number
- Order date
- Student name
- Courses purchased
- Payment total
- Billing address
- Next steps instructions

### Emails Sent
| Email | Recipient | Subject |
|-------|-----------|---------|
| Order Confirmation | Student | Your OVS Order Confirmation |
| Order Confirmation | Parent | Your OVS Order Confirmation |
| Admin Notification | Admin | New Course Registration |

---

## WooCommerce Hooks

### Checkout Field Customization
```php
// Add custom checkout fields
add_filter('woocommerce_checkout_fields', function($fields) {
    $fields['billing']['student_first_name'] = array(
        'label' => 'Student First Name',
        'required' => true,
        'class' => array('form-row-first'),
        'priority' => 10
    );
    // ... more fields
    return $fields;
});
```

### Save Custom Fields
```php
add_action('woocommerce_checkout_update_order_meta', function($order_id) {
    if (!empty($_POST['student_first_name'])) {
        update_post_meta($order_id, 'student_first_name',
            sanitize_text_field($_POST['student_first_name']));
    }
    // ... more fields
});
```

---

## Security Measures

| Measure | Implementation |
|---------|----------------|
| SSL/TLS | HTTPS enforced |
| CSRF | WordPress nonce |
| XSS | Output escaping |
| SQL Injection | Prepared statements |
| Payment Security | Square tokenization |
| PCI Compliance | No card data stored |

---

## Rebuild Instructions

### Required Plugins
- WooCommerce
- WooCommerce Square (payment gateway)
- Custom checkout fields plugin (or custom code)

### Custom Fields Code
Add to theme's `functions.php` or custom plugin:

```php
// Register custom checkout fields for student information
// See WooCommerce documentation for field customization
```

### Square Setup
1. Create Square Developer account
2. Get Application ID and Location ID
3. Configure in WooCommerce → Settings → Payments → Square
4. Enable test mode for development
