// pages/api/register.js
import multiparty from 'multiparty';
import dbConnection from './dbConfig/db';
import { isValidEmail, comparePasswords } from './dbConfig/function';




export const config = {
  api: {
    bodyParser: false, // Disable the default body parser
  },
};


export default async function login(req, res) {
  if (req.method === 'POST') {
    // Handle form data using multiparty
    const form = new multiparty.Form();

    form.parse(req, async (error, fields) => {
      // const email = req.email;
      // const password  = req.password;
      const {email, password} = fields;
      try {
        const connection = await dbConnection.getConnection();

        // Check if fullname or email is an empty string
        if (email[0].trim() === '' || password[0] === '') {

          connection.release();
          return res.status(400).json({
            success: false,
            response: 106,
            message1: 'ERROR!',
            message2: 'Fill all fields to continue',
          });

        } else {

          if (!isValidEmail(email)) {

            connection.release();
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

                  connection.release();
                  return res.status(201).json({
                    success: true,
                    response: 108,
                    user_id: userId,
                    message1: 'SUCCESSFUL!',
                    message2: 'Redireting to the portal...',
                  });

                } else if (statusId == 2) {

                  connection.release();
                  return res.status(400).json({
                    success: false,
                    response: 109,
                    message1: 'USER SUSPENDED!',
                    message2: 'Contact admin for help',
                  });

                } else {

                  connection.release();
                  return res.status(400).json({
                    success: false,
                    response: 110,
                    message1: 'USER UNDER REVIEWED!',
                    message2: 'Contact admin for help.',
                  });
                }

              } else {

                connection.release();
                return res.status(400).json({
                  success: false,
                  response: 111,
                  message1: 'INVALID LOGIN PARAMETERS!',
                  message2: 'Check email or password to continue.',
                });
              }

            } else {

              connection.release();
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
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
      }
   });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
