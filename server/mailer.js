import nodemailer from 'nodemailer';
import xoauth2 from 'xoauth2';

export default (req, res, next) => {

    console.log('Mailer');

    const transporter = nodemailer.createTransport({
      host: `smtp.gmail.com`,
      // auth: {
      //   xoauth2: xoauth2.createXOAuth2Generator({
      //     user: `hi.world.ltd@gmail.com`,
      //     clientId: `557556980773-6q74cn2o00iq7ku4kvfe1eu8h26o5hn4.apps.googleusercontent.com`,
      //     clientSecret: `mRiBWeLAucpuzfDqGZ1e2ygw`,
      //     refreshToken: `1/fjTP_zgYKqWT4J8JL0I6iLLE86fUbnwbjoyufkp_aAL12sPSaRcevA3en_tEtU_s`
      //   })
      // }
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

    // nodemailer.createTestAccount((err, account) => {
    //     // const transporter = nodemailer.createTransport('smtps://hi.world.ltd%40gmail.com:3841109done2018@smtp.gmail.com');
    //     let transporter = nodemailer.createTransport({
    //         host: `smtp.ethereal.email`,
    //         port: 587,
    //         secure: false,
    //         auth: {
    //           user: account.user,
    //           pass: account.pass
    //         }
    //     });
    //
    //     let mailOptions = {
    //         from: `"Customer" <foo@example.com>`,
    //         to: 'hi.world.ltd@gmail.com',
    //         subject: 'Order',
    //         text: `
    //         Name: ${req.body.name ? req.body.name : `No name`} \u000A
    //         Email: ${req.body.email ? req.body.email : `No email`} \u000A
    //         Phone: ${req.body.phone ? req.body.phone : `No phone`} \u000A
    //         Message: ${req.body.message ? req.body.message : `No message`}`
    //     };
    //
    //     transporter.sendMail(mailOptions, (err, info) => {
    //        if (err) {
    //            console.log(err);
    //            res.status(500);
    //            return next(err);
    //        }
    //        console.log(`Message was sent: ${info.response}`);
    //        res.sendStatus(200).send('Was send');
    //     });
    // });
};


// hi.world.ltd
// 3841109done2018
