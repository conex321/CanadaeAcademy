# Live Chat Widget

## Overview
- **Component Name:** Live Chat Widget
- **Provider:** Crisp (https://crisp.chat)
- **Location:** All pages (bottom-right corner)
- **Purpose:** Real-time customer support and offline messaging

---

## Technology Stack

| Component | Value |
|-----------|-------|
| Platform | Crisp |
| Integration | JavaScript SDK |
| Load Method | Async (non-blocking) |
| Storage | LocalStorage + Server |

---

## Installation Code

### Basic Installation
Add to `<head>` or before `</body>`:

```html
<script type="text/javascript">
  window.$crisp = [];
  window.CRISP_WEBSITE_ID = "YOUR_WEBSITE_ID_HERE";

  (function() {
    var d = document;
    var s = d.createElement("script");
    s.src = "https://client.crisp.chat/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
  })();
</script>
```

### WordPress Installation
Add to theme's `functions.php`:

```php
function add_crisp_chat() {
    ?>
    <script type="text/javascript">
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = "YOUR_WEBSITE_ID_HERE";
      (function() {
        var d = document;
        var s = d.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = 1;
        d.getElementsByTagName("head")[0].appendChild(s);
      })();
    </script>
    <?php
}
add_action('wp_footer', 'add_crisp_chat');
```

---

## Widget States

### Closed State (Chat Bubble)
```
┌─────────────┐
│     💬      │  ← Floating button
│             │     bottom-right
└─────────────┘
```

### Open State (Chat Window)
```
┌──────────────────────────┐
│  OVS Support        ✕    │ ← Header
├──────────────────────────┤
│                          │
│  [Operator]: Hi! How     │
│  can we help?            │
│                          │
│  [You]: I have a         │
│  question about...       │ ← Message list
│                          │
├──────────────────────────┤
│ Type your message...  ➤  │ ← Input
└──────────────────────────┘
```

---

## Features

### Live Chat
| Feature | Description |
|---------|-------------|
| Real-time Messaging | Instant communication with support |
| Typing Indicators | Shows when other party is typing |
| Read Receipts | Confirms message delivery |
| File Sharing | Share images and documents |

### Offline Messaging
When support is unavailable:

| Field | Type | Required |
|-------|------|----------|
| Name | text | ✅ |
| Email | email | ✅ |
| Message | textarea | ✅ |

### Chat History
- Persists across browser sessions
- Stored in LocalStorage and server
- User can continue previous conversations

### Proactive Messages
- Auto-trigger after 30 seconds
- Welcome message: "Hi! How can we help you today?"
- Configurable in Crisp dashboard

---

## Offline Form

When operators are offline, visitors see:

```html
<div class="crisp-offline-form">
  <h3>Leave us a message</h3>
  <p>We're not available right now. Leave your message and we'll get back to you.</p>

  <form>
    <div class="form-group">
      <label>Your Name *</label>
      <input type="text" name="name" required placeholder="Enter your name" />
    </div>

    <div class="form-group">
      <label>Email Address *</label>
      <input type="email" name="email" required placeholder="Enter your email" />
    </div>

    <div class="form-group">
      <label>Message *</label>
      <textarea name="message" required placeholder="How can we help?"></textarea>
    </div>

    <button type="submit">Send Message</button>
  </form>
</div>
```

---

## Customization

### Colors
```javascript
$crisp.push(["config", "color:theme", ["blue"]]);
```

| Element | Default Color |
|---------|---------------|
| Primary | #007bff |
| Header Background | #007bff |
| Header Text | #ffffff |
| Visitor Bubble | #007bff |
| Operator Bubble | #f1f1f1 |

### Texts
```javascript
// Set welcome message
$crisp.push(["config", "message:welcome", ["Hi! How can we help?"]]);

// Set away message
$crisp.push(["config", "message:away", ["We're offline. Leave a message!"]]);
```

---

## JavaScript API

### Open/Close Chat
```javascript
// Open chat window
$crisp.push(["do", "chat:open"]);

// Close chat window
$crisp.push(["do", "chat:close"]);

// Toggle chat window
$crisp.push(["do", "chat:toggle"]);
```

### Send Message
```javascript
// Send text message
$crisp.push(["do", "message:send", ["text", "Hello!"]]);
```

### Set User Data
```javascript
// Set user email (for follow-up)
$crisp.push(["set", "user:email", ["student@example.com"]]);

// Set user name
$crisp.push(["set", "user:nickname", ["John Doe"]]);

// Set custom data
$crisp.push(["set", "session:data", [[
  ["student_id", "12345"],
  ["current_course", "SBI3U"]
]]]);
```

### Event Listeners
```javascript
// When chat opened
$crisp.push(["on", "chat:opened", function() {
  console.log("Chat opened");
}]);

// When message received
$crisp.push(["on", "message:received", function(message) {
  console.log("Message received:", message);
}]);
```

---

## Mobile Behavior

| Feature | Behavior |
|---------|----------|
| Responsive | Adapts to screen size |
| Full Screen | Opens full screen on mobile |
| Touch Optimized | Large touch targets |
| Keyboard | Pushes content up when typing |

---

## Analytics (Crisp Dashboard)

Tracked metrics:
- Number of conversations
- Average response time
- Visitor satisfaction ratings
- Page where chat initiated
- Time on site before chat
- Referral source

---

## Integration with WordPress

### Identify Logged-in Users
```php
function crisp_identify_user() {
    if (is_user_logged_in()) {
        $user = wp_get_current_user();
        ?>
        <script>
          $crisp.push(["set", "user:email", ["<?php echo esc_js($user->user_email); ?>"]]);
          $crisp.push(["set", "user:nickname", ["<?php echo esc_js($user->display_name); ?>"]]);
        </script>
        <?php
    }
}
add_action('wp_footer', 'crisp_identify_user', 100);
```

---

## Rebuild Instructions

1. **Create Crisp Account**
   - Go to https://crisp.chat
   - Sign up for account
   - Create new website

2. **Get Website ID**
   - Dashboard → Settings → Website Settings
   - Copy CRISP_WEBSITE_ID

3. **Install Code**
   - Add JavaScript snippet to website
   - Or use WordPress plugin

4. **Configure Settings**
   - Set business hours
   - Customize colors/messages
   - Add team members

5. **Test**
   - Open site in incognito
   - Test chat functionality
   - Verify offline form works
