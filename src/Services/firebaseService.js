import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const messaging = firebase.messaging()
export const initNotification = () => {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
        console.log(permission)
        if (permission === 'granted') {
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log('TOKEN  =>', currentToken);
                    // Send the token to your server and update the UI if necessary
                    // ...
                } else {
                    // Show permission request UI
                    console.log('No registration token available. Request permission to generate one.');
                    // ...
                }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
                // ...
            });
        } else {
            console.log('Unable to get permission to notify.');
        }
    });
}