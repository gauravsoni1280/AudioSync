const admin = require('firebase-admin');
const serviceAccount = require('./audiosync-8afa9-firebase-adminsdk-fbsvc-13fcc1c26a.json');

if (!admin.apps.length) { 
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

module.exports = admin;