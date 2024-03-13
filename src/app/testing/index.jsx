// pages/index.js
import { useState } from 'react';

export default function HomeConnection({realTimePageReloader}) {
  const [message, setMessage] = useState('');

  const testDatabaseConnection = async () => {
    try {
      const response = await fetch('/api/test');
      const data = await response.json();
      setMessage(data.message);

      // Display an alert if the database connection is successful
      if (data.message === 'Database query successful') {
        alert('Database connection successful!');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1 onClick={()=>realTimePageReloader()}>AFOLABI TAIWO</h1>
      <button onClick={testDatabaseConnection}>Test Database Connection</button>
      <p>{message}</p>
    </div>
  );
}
