import nodemailer from 'nodemailer';

export default (req, res, next) => {

    console.log('Mailer');

    let transporter = nodemailer.createTransport('smtps://aderihoilya%40gmail.com:Aderihoilya1903@smtp.gmail.com');

    let mailOptions = {
        to: 'aderihoilya@gmail.com',
        subject: 'Order',
        text: `
        Name: ${req.body.name} \u000A
        Email: ${req.body.email} \u000A
        Phone: ${req.body.phone} \u000A
        Message: ${req.body.message}`
    };

    transporter.sendMail(mailOptions, (err, info) => {
       if (err) {
           console.log(err);
           res.status(500);
           return next(err);
       }
       console.log(`Message was sent: ${info.response}`);
       res.sendStatus(200).send('Was send');
    });
};
