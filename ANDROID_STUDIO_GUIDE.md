# 🤖 Android Studio Integration Guide

## Overview
This guide will help you integrate the SafeGuard web app into Android Studio for native Android deployment.

## Option 1: WebView Wrapper (Recommended - Fastest)

### Step 1: Create New Android Project
1. Open Android Studio
2. File → New → New Project
3. Select "Empty Activity"
4. Name: SafeGuard
5. Package: com.safeguard.app
6. Language: Kotlin (or Java)
7. Minimum SDK: API 24 (Android 7.0)

### Step 2: Add Internet Permission
Edit `app/src/main/AndroidManifest.xml`:
```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.safeguard.app">

    <!-- Add these permissions -->
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

    <application
        android:usesCleartextTraffic="true"
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:theme="@style/Theme.SafeGuard">
        
        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:configChanges="orientation|screenSize">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>
```

### Step 3: Create WebView Activity (Kotlin)
Edit `app/src/main/java/com/safeguard/app/MainActivity.kt`:
```kotlin
package com.safeguard.app

import android.os.Bundle
import android.webkit.WebView
import android.webkit.WebViewClient
import android.webkit.WebSettings
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    private lateinit var webView: WebView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        webView = findViewById(R.id.webview)
        
        // Configure WebView settings
        val webSettings: WebSettings = webView.settings
        webSettings.javaScriptEnabled = true
        webSettings.domStorageEnabled = true
        webSettings.databaseEnabled = true
        webSettings.setSupportZoom(false)
        webSettings.builtInZoomControls = false
        webSettings.displayZoomControls = false
        
        // Enable responsive layout
        webSettings.useWideViewPort = true
        webSettings.loadWithOverviewMode = true
        
        // Cache settings for offline support
        webSettings.cacheMode = WebSettings.LOAD_DEFAULT
        webSettings.setAppCacheEnabled(true)
        
        // Set WebViewClient to handle navigation
        webView.webViewClient = WebViewClient()
        
        // Load your SafeGuard app URL
        // Replace with your actual deployed URL
        webView.loadUrl("https://your-safeguard-app-url.com")
        
        // For local testing (requires local server):
        // webView.loadUrl("http://10.0.2.2:3000")
    }

    // Handle back button
    override fun onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack()
        } else {
            super.onBackPressed()
        }
    }
}
```

### Step 4: Create Layout
Edit `app/src/main/res/layout/activity_main.xml`:
```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <WebView
        android:id="@+id/webview"
        android:layout_width="match_parent"
        android:layout_height="match_parent" />

</RelativeLayout>
```

### Step 5: Customize App Icon & Splash Screen
1. Right-click on `res` folder → New → Image Asset
2. Choose your SafeGuard logo (shield with heart)
3. Generate icons for all densities

### Step 6: Build & Run
1. Connect Android device or start emulator
2. Click Run button (▶️) in Android Studio
3. Your SafeGuard app will install and launch

---

## Option 2: React Native (Full Native)

### Prerequisites
```bash
npm install -g react-native-cli
```

### Step 1: Initialize React Native Project
```bash
npx react-native init SafeGuard
cd SafeGuard
```

### Step 2: Install Dependencies
```bash
npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
npm install axios
```

### Step 3: Copy Your React Components
Copy these folders from your web app:
- `/app/frontend/src/components/` → `SafeGuard/src/components/`
- `/app/frontend/src/pages/` → `SafeGuard/src/pages/`

### Step 4: Adapt for React Native
Replace web-specific imports:
```javascript
// Web version:
import { Button } from '@/components/ui/button';

// React Native version:
import { Button, TextInput, View, Text } from 'react-native';
```

### Step 5: Configure Android
Edit `android/app/src/main/AndroidManifest.xml` to add permissions.

### Step 6: Run on Android
```bash
npx react-native run-android
```

---

## Option 3: Progressive Web App (PWA)

### Deploy your web app and users can install it directly from Chrome:

1. Deploy SafeGuard to a hosting service (Vercel, Netlify, etc.)
2. On Android Chrome, visit your app URL
3. Tap menu (⋮) → "Add to Home Screen"
4. App appears on home screen like native app
5. Works offline with service workers

### Benefits:
- No app store approval needed
- Instant updates (no app store review)
- Works on all platforms
- Easy distribution

---

## File Structure for Android WebView Project

```
SafeGuard/
├── app/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/safeguard/app/
│   │   │   │   └── MainActivity.kt
│   │   │   ├── res/
│   │   │   │   ├── layout/
│   │   │   │   │   └── activity_main.xml
│   │   │   │   ├── values/
│   │   │   │   │   ├── strings.xml
│   │   │   │   │   ├── colors.xml
│   │   │   │   │   └── themes.xml
│   │   │   │   └── mipmap-*/
│   │   │   │       └── ic_launcher.png
│   │   │   └── AndroidManifest.xml
│   │   └── build.gradle
│   └── build.gradle
└── gradle.properties
```

---

## Recommended: Colors for Android Theme

Edit `app/src/main/res/values/colors.xml`:
```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="primary_pink">#FFB6C1</color>
    <color name="primary_blue">#87CEEB</color>
    <color name="accent_blue">#4A90E2</color>
    <color name="white">#FFFFFF</color>
    <color name="background_gradient_start">#FFE5F0</color>
    <color name="background_gradient_end">#E0F2FE</color>
</resources>
```

---

## App Store Deployment Checklist

### Before Publishing to Google Play Store:

- [ ] App icon created (512x512 PNG)
- [ ] Screenshots taken (phone, tablet)
- [ ] Privacy policy written and hosted
- [ ] App signing configured (keystore)
- [ ] ProGuard rules configured (if needed)
- [ ] App tested on multiple devices
- [ ] Permissions justified in store listing
- [ ] Version code and version name set
- [ ] Content rating obtained
- [ ] Store listing written (title, description)
- [ ] Feature graphic created (1024x500)

---

## Testing on Physical Android Device

### Enable Developer Mode:
1. Settings → About Phone
2. Tap "Build Number" 7 times
3. Go back → Developer Options
4. Enable "USB Debugging"

### Connect and Deploy:
1. Connect phone via USB
2. Allow USB debugging on phone
3. In Android Studio: Select your device
4. Click Run ▶️

---

## Performance Optimization for Android

### In MainActivity.kt, add:
```kotlin
// Enable hardware acceleration
webView.setLayerType(View.LAYER_TYPE_HARDWARE, null)

// Optimize rendering
if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
    webView.setLayerType(View.LAYER_TYPE_HARDWARE, null)
} else {
    webView.setLayerType(View.LAYER_TYPE_SOFTWARE, null)
}
```

---

## Troubleshooting

### Issue: White screen on app launch
**Solution**: Check if URL is accessible, enable cleartext traffic

### Issue: App not loading
**Solution**: Verify internet permission in manifest

### Issue: Back button doesn't work
**Solution**: Override onBackPressed() as shown above

### Issue: Keyboard covers input
**Solution**: Add to manifest:
```xml
android:windowSoftInputMode="adjustResize"
```

---

## Next Steps

1. ✅ Choose integration method (WebView recommended for quick start)
2. ✅ Set up Android Studio project
3. ✅ Deploy your web app to a hosting service
4. ✅ Configure WebView to load your URL
5. ✅ Test on Android device
6. ✅ Customize icon and splash screen
7. ✅ Prepare for Play Store submission

---

**Need Help?** Check Android Developer documentation at developer.android.com
