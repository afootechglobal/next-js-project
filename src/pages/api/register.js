// pages/api/register.js
import multiparty from 'multiparty';
import dbConnection from './dbConfig/db';
import { isNumeric, isValidEmail, hashPassword, comparePasswords, getSequenceCount } from './dbConfig/function';



export const config = {
  api: {
    bodyParser: false, // Disable the default body parser
  },
};



export default async function getSignUpRequest(req, res) {
  if (req.method === 'POST') {
    try {

      const contentType = req.headers['content-type'];

      if (contentType === 'application/json') {
        
        config.api.bodyParser = true; 
        // Handle JSON request
        const { fullname, email, phone, address, password, status_id } = req.body;

        await userSignUp(fullname, email, phone, address, password, status_id, res);

      } else if (contentType.startsWith('multipart/form-data')) {
        connection.release();
        config.api.bodyParser = false;

        // Handle form data
        const form = new multiparty.Form();
        form.parse(req, async (error, fields) => {
          if (error) {
            console.error('Error parsing form data:', error);
            return res.status(500).json({ message: 'Internal Server Error', error: error.message });
          }
          const fullname = fields.fullname[0];
          const email = fields.email[0];
          const phone = fields.phone[0];
          const address = fields.address[0];
          const password = fields.password[0]; 
          const status_id = fields.status_id[0];

          await userSignUp(fullname, email, phone, address, password, status_id,res);
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



async function userSignUp(fullname, email, phone, address, password, status_id, res) {
      const connection = await dbConnection.getConnection();

      try {
        connection.release();

        // Check if all data is empty
        if (fullname.trim() === '' || email.trim() === '' || phone.trim() === '' || address.trim() === '' || password === '' || status_id === '') {

          return res.status(400).json({
            success: false,
            response: 100,
            message1: 'ERROR!',
            message2: 'Fill all fields to continue',
          });
          
        } else {

          if (!isValidEmail(email)) {
            return res.status(400).json({
              success: false,
              response: 101,
              message1: 'EMAIL ADDRESS ERROR!',
              message2: 'Check Your Email and Try Again',
            });

          } else {
            if (!isNumeric(phone)) {

              return res.status(400).json({
                success: false,
                response: 102,
                message1: 'PHONE NUMBER ERROR!',
                message2: 'Phone Number Only Accept Digits',
              });

            } else {
              // Check if the email is already exist
              const [existingUsers] = await connection.query('SELECT * FROM user_tab WHERE email = ?', [email]);
              if (existingUsers.length > 0) {

                return res.status(400).json({
                  success: false,
                  response: 103,
                  message1: 'EMAIL ALREADY EXIST!',
                  message2: 'Check your email or sign-up',
                });

              } else {

                const hashedPassword = await hashPassword(password);
                const isPasswordMatch = await comparePasswords(String(password), String(hashedPassword));

                if (isPasswordMatch) {

                  const getUserId = await getSequenceCount(connection, 'USER');
                  const userId = 'USER' + getUserId;

                  await connection.query(
                    'INSERT INTO user_tab (user_id, fullname, email, phone, address, status_id, password, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                    [userId, fullname.toUpperCase(), email, phone, address.toUpperCase(), status_id[0], hashedPassword, new Date()]
                  );

                  res.status(201).json({
                    success: true,
                    response: 104,
                    message1: 'REGISTRATION SUCCESSFUL!',
                    message2: 'User Registered Successfully',
                    user_id: userId,
                  });
                } else {

                  res.status(400).json({
                    success: true,
                    response: 104,
                    message1: 'PASSWORD ERROR!',
                    message2: 'Check your password and try again',
                    user_id: userId,
                  });

                }
              }
            }
          }
        }

      } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
      }
}
