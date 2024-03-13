// pages/api/register.js
import multiparty from 'multiparty';
import dbConnection from './dbConfig/db';
import { isNumericPhone, isValidEmail } from './dbConfig/function';

// export const config = {
//   api: {
//     bodyParser: false, // Disable the default body parser
//   },
// };


export default async function updateSingleUser(req, res) {
  if (req.method === 'POST') {
    try {

      const contentType = req.headers['content-type'];

      if (contentType == 'application/json') {
        // Handle JSON request
        const { user_id, fullname, email, phone, address, status_id } = req.body;

        await updateUser(user_id, fullname, email, phone, address, status_id, res);

      } else if (contentType.startsWith('multipart/form-data')) {

        const form = new multiparty.Form();
        // Handle form data
        form.parse(req, async (error, fields) => {
          if (error) {
            console.error('Error parsing form data:', error);
            return res.status(500).json({ message: 'Internal Server Error', error: error.message });
          }
          // const { user_id, fullname, email, phone, address, status_id } = {fields};
          const user_id = fields.user_id[0];
          const fullname = fields.fullname[0];
          const email = fields.email[0];
          const phone = fields.phone[0];
          const address = fields.address[0];
          const status_id = fields.status_id[0];

          await updateUser(user_id, fullname, email, phone, address, status_id, res);
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




async function updateUser(user_id, fullname, email, phone, address, status_id, res) {
  const connection = await dbConnection.getConnection();
  try {

    // Check if fullname or email is an empty string
    if (fullname.trim() === '' || email.trim() === '' || phone.trim() === '' || address.trim() === '' || status_id.trim() === '') {

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
        if (!isNumericPhone(phone)) {

          return res.status(400).json({
            success: false,
            response: 102,
            message1: 'PHONE NUMBER ERROR!',
            message2: 'Phone Number Only Accept Digits',
          });

        } else {
          // Check if the email is already exist
          const [existingUsers] = await connection.query('SELECT user_id FROM user_tab WHERE user_id = ?', [user_id]);
          if (existingUsers.length == 0) {

            return res.status(400).json({
              success: false,
              response: 103,
              message1: 'USER ERROR!',
              message2: 'User Not Exist',
            });

          } else {

            const [existingUsers] = await connection.query('SELECT email FROM user_tab WHERE email = ? AND user_id != ?', [email, user_id]);
            if (existingUsers.length > 0) {

              return res.status(400).json({
                success: false,
                response: 103,
                message1: 'EMAIL ERROR!',
                message2: 'Email Already Exist',
              });

            } else {

              await connection.query(
                'UPDATE user_tab SET fullname = ?, email = ?, phone = ?, address = ?, status_id = ? WHERE user_id = ?',
                [fullname.toUpperCase(), email, phone, address.toUpperCase(), status_id, user_id]
              );

              res.status(201).json({
                success: true,
                response: 104,
                message1: 'UPDATE SUCCESSFUL!',
                message2: 'User Profile Updated',
                user_id: user_id,
              });

            }
          }
        }
      }
    }
    connection.release(); // Release the connection back to the pool

  } catch (error) {
    console.error('Error executing the query:', error);
    res.status(500).json({ success: false, error: error.message, message: 'Internal Server Error' });
  }

}