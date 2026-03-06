// =============================================
// FIREBASE CONFIGURATION
// =============================================
// 1. Go to https://console.firebase.google.com
// 2. Create a new project (e.g. "aditya-photography")
// 3. Add a Web App ( </> icon)
// 4. Copy your config values below
// 5. Go to Firestore Database → Create database → Start in test mode
// =============================================

const firebaseConfig = {
    apiKey:            "YOUR_API_KEY",
    authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
    projectId:         "YOUR_PROJECT_ID",
    storageBucket:     "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId:             "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
