var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

/* GET Contact form. */
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact Me', msg: '' });
});


//POST for sending emails
router.post('/sendEmail', function (req, res) {
    var mailOpts, smtpTrans;

    //Set nodemailer up

    var transporter = nodemailer.createTransport(smtpTransport({
        service: 'Gmail',
        auth: {
            user: "nickemetcalfdev@gmail.com",
            pass: "JERGinsD3V"
        }
    }));

    //Mail options
    mailOpts = {
        from: req.body.name+'<'+req.body.email+'>',
        to: 'nickemetcalfdev@gmail.com',
        subject: 'Portfolio Contact Form',
        text: req.body.message
    };
    transporter.sendMail(mailOpts, function (err, response) {

        //Error sending the email
        if (err) {
            console.log(err);
            res.render('contact', { title: 'Contact Me', msg: 'An error occurred, your email was not sent.', err: true, page: 'contact' })
        }

        //Email was sent successfully
        else if(!err) {
            res.render('contact', { title: 'Contact Me', msg: 'Your email was sent successfully.', err: false, page: 'contact' })
        }else{
            res.render('contact', { title: 'Contact Me', msg: '', err: false, page: 'contact' })

        }
    });
});


module.exports = router;
