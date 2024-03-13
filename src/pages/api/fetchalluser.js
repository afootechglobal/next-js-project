// pages/api/fetchalluser.js
import dbConnection from './dbConfig/db';

export default async function fetchAllUser(req, res) {
  try {
    const connection = await dbConnection.getConnection();
    const [getAllUser] = await connection.query('SELECT * FROM user_tab');

    if(getAllUser.length > 0){

      res.status(200).json({
        response: 98,
        success: true,
        message: 'All User Fetch Successful!',
        data: getAllUser,
      });

    }else{
      
      res.status(200).json({
        response: 99,
        success: false,
        message: 'No Record Found!',
      });

    }
  
    connection.release(); // Release the connection back to the pool
    
  } catch (error) {
    console.error('Error executing the query:', error);
    res.status(500).json({ success: false, error: error.message, message: 'Internal Server Error' });
  }
}


