const express = require('express');
const { sendEmail } = require('../utils/sendEmail.js');
const router = express.Router();


router.get('/', (req, res) => {
    res.send("Welcome to express");
});

router.post('/emails/contact', (req, res) => {
    const { name, email, phone, message } = req.body
    sendEmail({
        to: "olivosergio09@gmail.com",
        subject: `MSJ Portfolio ${name}`,
        text: `Hello soy ${name}, mi numero es ${phone}, ${message}`
    })

    res.send({message: 'email send'}).status(200)
});



module.exports = router;
