// pages/api/function.js
import bcrypt from 'bcrypt';
import { randomBytes } from 'crypto'

export function isNumeric(num) {
    const numericPattern = /^[0-9]+$/;
    return numericPattern.test(num);
  }
  
 export function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  
  
  export async function hashPassword(password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  }

  export async function comparePasswords(password, hashedPassword) {
    const passwordMatch = await bcrypt.compare(password, hashedPassword);
    return passwordMatch;
  }


  export function generateOtp(min, max) {
    const buffer = randomBytes(4); // Use 4 bytes to cover the range up to 999999
    const randomNumber = buffer.readUInt32BE(0);
    return Math.floor((randomNumber / 0xFFFFFFFF) * (max - min + 1)) + min;
  }






//   export function alertResponse(res, statusCode, successData, responseCode, errorMessage1, errorMessage2) {
//     return res.status(statusCode).json({
//       success: successData,
//       response: responseCode,
//       message1: errorMessage1,
//       message2: errorMessage2,
//     });
//   }

  
export async function getSequenceCount(connection, counter_id) {
    try {
        const [countResult] = await connection.query(
            'SELECT counter_value FROM setup_counter_tab WHERE counter_id = ? FOR UPDATE', [counter_id]
        );
        // Extract the counter_value from the countResult and increment by 1
        const newCounterValue = countResult[0].counter_value + 1;
        /// update  setup_counter_tab by 1 
        await connection.query(
            'UPDATE setup_counter_tab SET counter_value = ? WHERE counter_id = ?',
            [newCounterValue, counter_id]
        );

        let no;
        if (newCounterValue < 10) {
            no = '00' + newCounterValue;
        } else if (newCounterValue >= 10 && newCounterValue < 100) {
            no = '0' + newCounterValue;
        } else {
            no = newCounterValue;
        }
        // Return the formatted result
        return  generateId(no);
       
    } catch (error) {
        console.error('Error getting sequence count:', error);
        // Handle the error appropriately (e.g., throw it, log it, etc.)
        throw error;
    } finally {
        // Ensure the connection is released even if an error occurs
        connection.release();
    }
}


function generateId(getId){
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based (0-11), so add 1
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const idFormat =`${getId}${year}${month}${day}${hours}${minutes}${seconds}`;

    return idFormat;
}