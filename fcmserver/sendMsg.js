var admin = require("firebase-admin");

var serviceAccount = require("./jr-fed2b-firebase-adminsdk-dw6xz-aea007a602.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://jr-fed2b.firebaseio.com"
});

var registrationToken = 'fGrc321qc_U:APA91bGnv858dHHSsybi2ZBEKdc_vL1lUmU58_B21ime-1FJtKYk-g9mPSev9ENSFGM-vBgCtnUoLolCc6CzPPRJE-Jk2Eln_Duty0qi04whHYyyeAZ_GOog3LWBUw6knqB8sC0AjhQD';

// See documentation on defining a message payload.
var message = {
    data: {
        'title': 'Service Worker Test',
        'body': 'service worker content',
        'icon': 'firebase-logo.png',
        'click_action': 'http://localhost:8081'
    },
    token: registrationToken
};

// Send a message to the device corresponding to the provided
// registration token.
admin.messaging().send(message)
    .then((response) => {
        // Response is a message ID string.
        console.log('Successfully sent message:', response);
    })
    .catch((error) => {
        console.log('Error sending message:', error);
    });
