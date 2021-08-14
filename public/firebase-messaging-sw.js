// For Firebase JS SDK v7.20.0 and later, measurementId is optional
importScripts('https://www.gstatic.com/firebasejs/8.9.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.9.1/firebase-messaging.js');
// importScripts('/__/firebase/init.js');

const firebaseConfig = {
    apiKey: "AIzaSyCT73iNbmrZF2esol9RL1aZi3jgTxW_lGY",
    authDomain: "notificationsamle-64ab6.firebaseapp.com",
    projectId: "notificationsamle-64ab6",
    storageBucket: "notificationsamle-64ab6.appspot.com",
    messagingSenderId: "701053354027",
    appId: "1:701053354027:web:ef32e20cfb50528bed2a6e",
    measurementId: "G-Q3LY3933V5"
};
firebase.initializeApp(firebaseConfig);
firebase.messaging()