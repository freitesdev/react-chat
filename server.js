const express = require('express');
const cors = require('cors');
// const firebase = require("firebase/app");

// // Add the Firebase products that you want to use
// require("firebase/auth");
// require("firebase/firestore");

require("dotenv").config();

const app = express();
//middleware
app.use(cors())
app.use(express.json())
//Firebase
var firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
