import nodemailer from 'nodemailer';

export default (req, res, next) => {
    const transporter = nodemailer.createTransport({
      host: `smtp.gmail.com`,
      auth: {
        type: "login",
        user: "hi.world.ltd@gmail.com",
        pass: "3841109done2018"
      }
    });

    const mailOptions = {
      from: `HiWorld <hi.world.ltd@gmail.com>`,
      to: `hi.world.ltd@gmail.com`,
      subject: 'Order',
      text: `
      Name: ${req.body.name ? req.body.name : `No name`} \u000A
      Email: ${req.body.email ? req.body.email : `No email`} \u000A
      Phone: ${req.body.phone ? req.body.phone : `No phone`} \u000A
      Message: ${req.body.message ? req.body.message : `No message`}`
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.log(err);
          return next(err);
        }
          console.log(`Message was sent: ${info.response}`);
          res.sendStatus(200).send('Was send');
    });
};
