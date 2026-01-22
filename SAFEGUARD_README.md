# SafeGuard - Your Safety, Our Priority

![SafeGuard Logo](https://img.shields.io/badge/SafeGuard-v1.0-pink)
![Mobile Optimized](https://img.shields.io/badge/Mobile-Optimized-blue)
![Android Ready](https://img.shields.io/badge/Android-Ready-green)

## 🛡️ Overview

SafeGuard is a beautiful, mobile-optimized safety application designed specifically for Android devices. Built with a soothing pinkish-blue-white theme, it provides a secure and elegant authentication interface.

## 🎨 Design Features

### Color Theme
- **Primary Colors**: Soft Pink (#FFB6C1, #FFC0CB)
- **Secondary Colors**: Sky Blue (#87CEEB, #4A90E2)
- **Background**: Pure White with gradient overlays
- **Theme**: Calming pinkish-blue-white palette designed for safety and trust

### Logo Design
- **Concept**: Shield with Heart symbol
- **Symbolism**: Protection (shield) + Care (heart)
- **Style**: Smooth gradients with professional appearance
- **Colors**: Pink-to-blue gradient representing safety and calmness

### Mobile Optimization
- ✅ Fully responsive design for all screen sizes
- ✅ Touch-friendly buttons and inputs (44px+ height)
- ✅ Optimized for Android browsers
- ✅ PWA-ready (can be installed on Android home screen)
- ✅ Smooth animations and transitions
- ✅ Mobile viewport meta tags configured
- ✅ Apple mobile web app capable

## 🚀 Features

### Authentication System
1. **Login Form**
   - Email and password authentication
   - Forgot password link
   - Switch to signup option
   - Error handling and validation

2. **Signup Form**
   - Full name, email, phone number fields
   - Password with confirmation
   - Client-side validation
   - Password strength requirements (min 6 characters)

3. **Forgot Password**
   - Email-based password reset
   - Success/error messaging
   - Back to login option

## 📱 Android Usage

### Option 1: Direct Web Access
1. Open Chrome browser on your Android device
2. Navigate to your deployed URL
3. Use the app directly in the browser

### Option 2: Install as PWA (Recommended)
1. Open the app in Chrome on Android
2. Tap the "Add to Home Screen" option
3. The app will be installed like a native app
4. Launch from your home screen

### Option 3: WebView Integration
Wrap the app in a native Android WebView for full app experience:

```kotlin
// Android WebView Example
webView.settings.javaScriptEnabled = true
webView.loadUrl("https://your-safeguard-url.com")
```

### Option 4: Convert to React Native
The codebase is structured to be easily convertible to React Native for a fully native Android app.

## 🔧 Technical Stack

### Frontend
- **Framework**: React 19.0.0
- **Styling**: Tailwind CSS with custom theme
- **UI Components**: Radix UI (shadcn/ui)
- **Routing**: React Router DOM 7.5.1
- **HTTP Client**: Axios
- **Form Handling**: React Hook Form with Zod validation

### Backend
- **Framework**: FastAPI (Python)
- **Database**: MongoDB
- **Schema**: Pydantic models
- **Authentication**: Email/password based (ready for JWT enhancement)

### Mobile Features
- Responsive design (375px - 1920px+)
- Touch-optimized interactions
- Mobile-first approach
- Fast loading times
- Smooth animations

## 📂 Project Structure

```
/app/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── auth/
│   │   │       ├── Logo.jsx              # SafeGuard logo component
│   │   │       ├── LoginForm.jsx         # Login form
│   │   │       ├── SignupForm.jsx        # Signup form
│   │   │       └── ForgotPasswordForm.jsx # Password reset
│   │   ├── pages/
│   │   │   └── Index.jsx                 # Main auth page
│   │   ├── App.js                        # App router
│   │   ├── index.css                     # Custom theme & styles
│   │   └── ...
│   └── public/
│       └── index.html                    # Mobile-optimized HTML
├── backend/
│   └── server.py                         # FastAPI with auth endpoints
└── README.md
```

## 🔌 API Endpoints

### Authentication APIs

#### 1. Signup
```bash
POST /api/auth/signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "password": "securepass123"
}

Response:
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": "uuid",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890"
  }
}
```

#### 2. Login
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepass123"
}

Response:
{
  "success": true,
  "message": "Login successful",
  "user": {
    "id": "uuid",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890"
  }
}
```

#### 3. Forgot Password
```bash
POST /api/auth/forgot-password
Content-Type: application/json

{
  "email": "john@example.com"
}

Response:
{
  "success": true,
  "message": "Password reset instructions sent to your email"
}
```

## 🧪 Testing

### Test User Credentials
```
Email: test@safeguard.com
Password: testpass123
```

### Testing Commands
```bash
# Test Signup
curl -X POST http://localhost:8001/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@safeguard.com","phone":"+1234567890","password":"testpass123"}'

# Test Login
curl -X POST http://localhost:8001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@safeguard.com","password":"testpass123"}'

# Test Forgot Password
curl -X POST http://localhost:8001/api/auth/forgot-password \
  -H "Content-Type: application/json" \
  -d '{"email":"test@safeguard.com"}'
```

## 🎯 Data Test IDs (For Automated Testing)

All interactive elements include `data-testid` attributes:

### Login Form
- `login-form`
- `login-email-input`
- `login-password-input`
- `login-submit-button`
- `forgot-password-link`
- `switch-to-signup-button`

### Signup Form
- `signup-form`
- `signup-name-input`
- `signup-email-input`
- `signup-phone-input`
- `signup-password-input`
- `signup-confirm-password-input`
- `signup-submit-button`
- `switch-to-login-button`

### Forgot Password Form
- `forgot-password-form`
- `forgot-password-email-input`
- `forgot-password-submit-button`
- `back-button`
- `back-to-login-button`

## 🚀 Deployment

### For Android App Store
1. **PWA Route**: Deploy as progressive web app
2. **WebView Route**: Wrap in native Android shell
3. **React Native**: Convert to React Native for native performance

### Environment Variables
```bash
# Frontend (.env)
REACT_APP_BACKEND_URL=your_backend_url

# Backend (.env)
MONGO_URL=your_mongodb_connection_string
DB_NAME=safeguard
CORS_ORIGINS=*
```

## 🔐 Security Notes

### Current Implementation
- Basic email/password authentication
- Passwords stored in plain text (development only)

### Production Recommendations
1. **Password Hashing**: Implement bcrypt or argon2
2. **JWT Tokens**: Add JWT for session management
3. **HTTPS Only**: Force HTTPS in production
4. **Rate Limiting**: Add rate limiting to auth endpoints
5. **Email Verification**: Implement email verification
6. **2FA**: Consider two-factor authentication
7. **Password Reset Tokens**: Implement secure reset tokens

## 📱 Mobile Best Practices Implemented

✅ **Touch Targets**: All buttons 44px+ for easy tapping
✅ **Responsive Forms**: Auto-zoom disabled for inputs
✅ **Fast Loading**: Optimized assets and code splitting
✅ **Smooth Scrolling**: Native scrolling behavior
✅ **No Horizontal Scroll**: Proper viewport configuration
✅ **Touch Feedback**: Active states for touch interactions
✅ **Readable Text**: Minimum 16px font size
✅ **Accessible**: Proper labels and ARIA attributes

## 🎨 Customization

### Change Theme Colors
Edit `/app/frontend/src/index.css`:
```css
:root {
    --primary: 340 82% 75%;      /* Soft pink */
    --secondary: 210 100% 85%;   /* Light blue */
    --background: 252 100% 98%;  /* Very light pink-white */
}
```

### Modify Logo
Edit `/app/frontend/src/components/auth/Logo.jsx` to change the logo design.

### Update Branding
Search and replace "SafeGuard" with your brand name across the codebase.

## 📞 Support & Contact

For issues or questions about the SafeGuard application:
- Open an issue in your repository
- Contact your development team

## 📄 License

Copyright © 2025 SafeGuard. All rights reserved.

---

**Built with ❤️ for Safety and Security**
