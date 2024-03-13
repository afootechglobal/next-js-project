
// pages/api/resetpassword.js
import dbConnection from './dbConfig/db';
import multiparty from 'multiparty';
import { isNumeric, hashPassword } from './dbConfig/function';



export const config = {
  api: {
    bodyParser: false, // Disable the default body parser
  },
};





export default async function getCompleteResetPasswordRequest(req, res) {
  if (req.method === 'POST') {
    try {

      const contentType = req.headers['content-type'];

      if (contentType === 'application/json') {

        config.api.bodyParser = true;
        // Handle JSON request
        const { user_id, otp, password, comfirmed_password } = req.body;

        await userCompleteResetPassword(user_id, otp, password, comfirmed_password, res);

      } else if (contentType.startsWith('multipart/form-data')) {

        config.api.bodyParser = false;

        const form = new multiparty.Form();
        // Handle form data
        form.parse(req, async (error, fields) => {
          if (error) {
            console.error('Error parsing form data:', error);
            return res.status(500).json({ message: 'Internal Server Error', error: error.message });
          }

          const user_id = fields.user_id[0];
          const otp = fields.otp[0];
          const password = fields.password[0];
          const comfirmed_password = fields.comfirmed_password[0];

          await userCompleteResetPassword(user_id, otp, password, comfirmed_password, res);
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







async function userCompleteResetPassword(user_id, otp, password, comfirmed_password, res) {
  const connection = await dbConnection.getConnection();
  try {
    connection.release();

    if (user_id == '') {

      return res.status(400).json({
        success: false,
        response: 106,
        message1: 'USER ERROR!',
        message2: 'User not found',
      });

    } else if (otp == '') {

      return res.status(400).json({
        success: false,
        response: 106,
        message1: 'OTP ERROR!',
        message2: 'OTP only accept digit numbers',
      });

    } else if (!isNumeric(otp)) {

      return res.status(400).json({
        success: false,
        response: 106,
        message1: 'OTP ERROR!',
        message2: 'OTP only accept digit numbers',
      });

    } else if (password == '') {

      return res.status(400).json({
        success: false,
        response: 107,
        message1: 'PASSWORD ERROR!',
        message2: 'Fill all fields to continue',
      });


    } else {

      if (password == comfirmed_password) {

        const hashedPassword = await hashPassword(password);

        const [getUser] = await connection.query(
          'SELECT user_id, otp FROM user_tab WHERE user_id = ? AND otp = ?', 
          [user_id, otp]
        );

        if (getUser.length > 0) {

          await connection.query(
            'UPDATE user_tab SET password = ?, date = ? WHERE user_id = ?',
            [hashedPassword, new Date(), user_id]
          );

          return res.status(200).json({
            success: false,
            response: 111,
            message1: 'SUCCESS!',
            message2: 'Password Reset Successfully',
          });
        } else {

          return res.status(400).json({
            success: false,
            response: 111,
            message1: 'INVALID OTP PARAMETERS!',
            message2: 'Kindly, check your E-mail and try again',
          });

        }
      } else {
        return res.status(400).json({
          success: false,
          response: 111,
          message1: 'PASSWORD NOT MATCH!',
          message2: 'Check your password and try again',
        });

      }

    }

  } catch (error) {
    console.error('Error handling login request:', error);

    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}


