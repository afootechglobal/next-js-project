// mailer.js
import nodemailer from 'nodemailer';
const path = require('path');

export async function sendResetPasswordLink(email, fullname, hash_id) {
  console.log('MAIL', email);
  const website_url = 'http://localhost/projects/1stculturetour.com';
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const transporter = nodemailer.createTransport({
    host: 'mail.agrohandlers.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: 'help@agrohandlers.com',
      pass: '1971@@@ademorinola12',
    },
  });

  transporter.verify(function (error, success) {
    if (error) {
      console.log('SMTP Server connection error:', error);
    } else {
      console.log('SMTP Server connection successful:', success);
    }
  });

  const imageFilePath = path.join(process.cwd(), 'public', 'img', 'reset_password.jpg');
// const imageAttachment = fs.readFileSync(imageFilePath, { encoding: 'base64' });

console.log('Image File Path:', imageFilePath);
// console.log('Image Content:', imageAttachment);
if (imageFilePath) {
  // const imageAttachment = readFileSync(imageFilePath, { encoding: 'base64' });
  // Rest of the code...

  const message = {
    from: '"Agrohandler" <help@agrohandlers.com>',
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
            Kindly, click on this reset password link 
            <span><a style="color:#F00" href="${website_url}/admin/login/reset-password/?hvid=${hash_id}">
              ${website_url}/admin/login/reset-password/?hvid=${hash_id}
            </a></span> to complete your reset password process.
          </p>
          <p>
            <strong>StockMax Application | Stock Record Keeping</strong><br/>
            StockMax is a realtime stock management software which aims at providing stock record keeping, sales and report to retails and wholesales stores in Nigeria.
          </p>
          <p>
            <strong>Your Name</strong>.<br> Mail Sent ${currentDate}. 
          </p>
        </div>
        <div style="min-height:30px;background:#333;text-align:left;color:#FFF;line-height:20px; padding:20px 10px 20px 50px;">
          &copy; All Right Reserve. <br>Your Name.
        </div>
      </div>
    `,
    attachments: [
      {
        filename: 'reset_password.jpg',
        // path: path.join(process.cwd(), 'public', 'img', 'reset_password.jpg'),
        path: imageFilePath,
        cid: 'reset_password',
        contentDisposition: 'attachment', // Set contentDisposition to 'attachment'
      },
    ],
  };

  try {
    const info = await transporter.sendMail(message);
    console.log('Email sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }

} else {
  console.error('Error: Image file not found.');
}
}
