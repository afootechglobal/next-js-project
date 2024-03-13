// pages/api/fetchsingleuser.js
import multiparty from 'multiparty';
import dbConnection from './dbConfig/db';


export const config = {
  api: {
    bodyParser: '', // Disable the default body parser
  },
};


export default async function get(req, res) {
  if (req.method === 'POST') {
    try {

      const contentType = req.headers['content-type'];

      if (contentType === 'application/json') {
        config.api.bodyParser = true;
        // Handle JSON request
        const { user_id } = req.body;

        await fetchUser(user_id, res);

      } else if (contentType.startsWith('multipart/form-data')) {
        config.api.bodyParser = false;

        // Handle form data
        const form = new multiparty.Form();
        form.parse(req, async (error, fields) => {
          if (error) {
            console.error('Error parsing form data:', error);
            return res.status(500).json({ message: 'Internal Server Error', error: error.message });
          }
          const user_id = fields.user_id[0];

          await fetchUser(user_id, res);
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



async function fetchUser(user_id, res) {

  const connection = await dbConnection.getConnection();
  try {
    connection.release(); // Release the connection 

    const [getSingleUser] = await connection.query('SELECT * FROM user_tab WHERE user_id= ?', [user_id]);

    if (getSingleUser.length > 0) {

      res.status(200).json({
        response: 98,
        success: true,
        message: 'All User Fetch Successful!',
        data: getSingleUser,
      });

    } else {
      res.status(401).json({
        response: 99,
        success: false,
        message1: 'ERROR!',
        message: 'User Not Found!',
      });

    }


  } catch (error) {
    console.error('Error executing the query:', error);
    res.status(500).json({ success: false, error: error.message, message: 'Internal Server Error' });
  }

}



