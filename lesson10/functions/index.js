// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();
const nodemailer = require('nodemailer');
const request = require('request');
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPassword,
    },
});

//add listen to firebase database
exports.sendMail = functions.database.ref('/register/{pushId}')
    .onCreate((snap, context) => {
        console.log('new message');
        console.log(snap.val());
        const mailOptions = {
            from: '"viktoria service" <viktoria.wang@gogolook.com>',
            to: 'viktoria.wang@gogolook.com',
            subject: '甜點表單通知',
            text: JSON.stringify(snap.val()),
        };
        //mailTransport.sendMail(mailOptions);
        mailTransport.sendMail(mailOptions, function (err, info) {
            if (err){
                console.error('There was an error while sending the email:', err);
                //return res.redirect(500, err);
            }
            else{
                console.log('send mail success');
                //return res.redirect(200, 'OK');
            } 
        });
        //push to slack
        request.post('https://hooks.slack.com/services/abc/abc', { json: { text: `:entranced:有人報名了!!快到firebase查看` } })
    });