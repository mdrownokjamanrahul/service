importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyAamQRagtFolZ8-E2tzRno3BooY0T0n-Ik",
  authDomain: "abir-vhai.firebaseapp.com",
  projectId: "abir-vhai",
  storageBucket: "abir-vhai.firebasestorage.app",
  messagingSenderId: "819633836891",
  appId: "1:819633836891:web:a519975e5372936847007e",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Background message handler
messaging.onBackgroundMessage(payload => {
  console.log("📩 Background Message:", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/img/service.png"
  });
});
