
// pages/api/resetpassword.js
import dbConnection from './dbConfig/db';
import multiparty from 'multiparty';
import { isValidEmail, generateOtp } from './dbConfig/function';
import {sendResetPasswordLink} from './dbConfig/mail/mailer'

export const config = {
  api: {
    bodyParser: false, // Disable the default body parser
  },
};





export default async function getResetPasswordRequest(req, res) {
  if (req.method === 'POST') {
    try {

      const contentType = req.headers['content-type'];

      if (contentType === 'application/json') {

        config.api.bodyParser = true;
        // Handle JSON request
        const { email } = req.body;

        await userResetPassword(email, res);

      } else if (contentType.startsWith('multipart/form-data')) {

        config.api.bodyParser = false;

        const form = new multiparty.Form();
        // Handle form data
        form.parse(req, async (error, fields) => {
          if (error) {
            console.error('Error parsing form data:', error);
            return res.status(500).json({ message: 'Internal Server Error', error: error.message });
          }
          const email = fields.email[0];

          await userResetPassword(email, res);
        });

      } else {

        return res.status(400).json({
          success: false,
          response: 112,
          message1: 'INVALID REQUEST FORMAT!',
          message2: 'Unsupported content type. Use JSON or form-data.',
        });

      }

    } catch (error) {
      console.error('Error handling login request:', error);
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}







async function userResetPassword(email, res) {
  const connection = await dbConnection.getConnection();
  try {
    connection.release();

    if (email == '') {

      return res.status(400).json({
        success: false,
        response: 106,
        message1: 'ERROR!',
        message2: 'Fill this fields to continue',
      });

    } else {

      if (!isValidEmail(email)) {

        return res.status(400).json({
          success: false,
          response: 107,
          message1: 'INVALID EMAIL ADDRESS!',
          message2: 'Check your email or sign-up.',
        });

      } else {
        const [getUser] = await connection.query('SELECT fullname,user_id,status_id,password FROM user_tab WHERE email = ?', [email]);

        if (getUser.length > 0) {

          const statusId = getUser[0].status_id;
          const userId = getUser[0].user_id;
          const fullname = getUser[0].fullname;

          if (statusId == 1) {

            const otp = generateOtp(100000, 999999);

            await connection.query(
              'UPDATE user_tab SET otp = ? WHERE user_id = ?',
              [otp, userId]
            );

            await sendResetPasswordLink(email, fullname, 1);

            return res.status(200).json({
              success: true,
              response: 108,
              user_otp: otp,
              message1: 'SUCCESS - OTP SENT!',
              message2: 'Check your email to confirmed ',
            });

          } else if (statusId == 2) {

            return res.status(400).json({
              success: false,
              response: 109,
              message1: 'USER SUSPENDED!',
              message2: 'Contact admin for help',
            });

          } else {

            return res.status(400).json({
              success: false,
              response: 110,
              message1: 'USER UNDER REVIEWED!',
              message2: 'Contact admin for help.',
            });
          }

        } else {

          return res.status(400).json({
            success: false,
            response: 111,
            message1: 'INVALID LOGIN PARAMETERS!',
            message2: 'Check email or password to continue.',
          });

        }
      }

    }

  } catch (error) {
    console.error('Error handling login request:', error);

    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}


