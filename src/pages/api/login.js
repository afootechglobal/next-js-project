
// pages/api/login.js
import multiparty from 'multiparty';
import dbConnection from './dbConfig/db';
import { isValidEmail, comparePasswords } from './dbConfig/function';



export const config = {
  api: {
    bodyParser: false, // Disable the default body parser
  },
};





export default async function getLoginRequest(req, res) {
  if (req.method === 'POST') {
    try {

      const contentType = req.headers['content-type'];

      if (contentType === 'application/json') {

        config.api.bodyParser = true;
        // Handle JSON request
        const { email, password } = req.body;

        await userLogin(email, password, res);

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
          const password = fields.password[0];

          await userLogin(email, password, res);
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







async function userLogin(email, password, res) {
  const connection = await dbConnection.getConnection();
  try {
    connection.release();

    if (email == '' || password == '') {

      return res.status(400).json({
        success: false,
        response: 106,
        message1: 'ERROR!',
        message2: 'Fill all fields to continue',
      });
      
    } else {

      if (!isValidEmail(email)) {

        return res.status(400).json({
          success: false,
          response: 107,
          message1: 'INVALID LOGIN PARAMETERS!',
          message2: 'Check email or password to continue.',
        });

      } else {
        const [getUser] = await connection.query('SELECT user_id,status_id,password FROM user_tab WHERE email = ?', [email]);

        if (getUser.length > 0) {

          const statusId = getUser[0].status_id;
          const userId = getUser[0].user_id;
          const dbHashedPassword = getUser[0].password;

          const isPasswordMatch = await comparePasswords(String(password), String(dbHashedPassword));

          if (isPasswordMatch) {

            if (statusId == 1) {

              return res.status(200).json({
                success: true,
                response: 108,
                user_id: userId,
                message1: 'LOGIN SUCCESSFUL!',
                message2: 'Redireting to the portal...',
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


