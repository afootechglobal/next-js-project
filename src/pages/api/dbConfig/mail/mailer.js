// mailer.js
import nodemailer from 'nodemailer';
const path = require('path');


export async function getBackendSettingsDetails(connection, backend_setting_id, otp, email, fullname, hash_id) {
  try {
    const [getSetting] = await connection.query('SELECT * FROM setup_backend_settings_tab WHERE backend_setting_id = ?', [backend_setting_id]);
    const smtp_host = getSetting[0].smtp_host;
    const smtp_username = getSetting[0].smtp_username;
    const smtp_password = getSetting[0].smtp_password;
    const smtp_port = getSetting[0].smtp_port;
    const sender_name = getSetting[0].sender_name;

    sendResetPasswordLink(smtp_host, smtp_username, smtp_password, smtp_port, sender_name, otp, email, fullname, hash_id);
  } catch (error) {
    console.error('Error retrieving backend settings:', error);
  }

}




async function sendResetPasswordLink(smtp_host, smtp_username, smtp_password, smtp_port, sender_name, otp, email, fullname, hash_id) {

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const transporter = nodemailer.createTransport({
    host: smtp_host,
    port: smtp_port,
    secure: true, // use SSL
    auth: {
      user: smtp_username,
      pass: smtp_password,
    },
  });

  transporter.verify(function (error, success) {
    if (error) {
      console.log('SMTP Server connection error:', error);
    } else {
      console.log('SMTP Server connection successful:', success);
    }
  });


  const imageAttachmentPath = 'path/to/reset_password.jpg'; // Provide the correct path to the image

  const message = {
    from: `${sender_name} <${smtp_username}>`,
    to: email,
    // to: ['email1@example.com', 'email2@example.com', 'email3@example.com'],
    subject: `${fullname} Reset Password`,
    html: `
      <div style="width:90%; margin:auto; height:auto;">
        <img src="cid:reset_password" width="100%">
        <div style="padding:15px; font-family:16px;">
          <p>
            Dear <strong>${fullname}</strong> (${email}),
          </p>
          <p>
            Trust this mail meets you well.<br><br>
            Kindly, enter this OTP <span style="color:rgba(255,128,0,1); font-weight:bold ;">${otp}</span> to reset your password process
          </p>

          <p>
            <strong>${sender_name} Application </strong><br/>
            StockMax is a realtime stock management software which aims at providing stock record keeping, sales and report to retails and wholesales stores in Nigeria.
          </p>
          <p>
            <strong>${sender_name}</strong>.<br> Mail Sent ${currentDate}. 
          </p>
        </div>
        <div style="min-height:30px;background:#333;text-align:left;color:#FFF;line-height:20px; padding:20px 10px 20px 50px;">
          &copy; All Right Reserve. <br>${sender_name}.
        </div>
      </div>
    `,
    attachments: [
      {
        filename: 'reset_password.jpg',
        // path: path.join(process.cwd(), 'public', 'img', 'reset_password.jpg'),
        path: imageAttachmentPath,
        cid: 'reset_password',
      },
    ],
  };

  try {
    const info = await transporter.sendMail(message);
    console.log('Email sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }

}
