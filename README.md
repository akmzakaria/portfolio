# Portfolio Website

## Setup EmailJS

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{user_name}}` - Sender's name
   - `{{user_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Message content
4. Get your credentials:
   - Service ID
   - Template ID
   - Public Key
5. Update `src/components/Contact.jsx` with your credentials:
   ```javascript
   'YOUR_SERVICE_ID' // Replace with your service ID
   'YOUR_TEMPLATE_ID' // Replace with your template ID
   'YOUR_PUBLIC_KEY' // Replace with your public key
   ```

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

## Build for Production

```bash
npm run build
```

## Technologies Used

- React
- Vite
- Tailwind CSS
- Framer Motion
- EmailJS
