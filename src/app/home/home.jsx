import React, { useEffect, useState } from 'react';

export default function HomePage({ realTimePageReloader }) {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/fetchalluser');
       
        const usersData = await response.json();
        setUsers(usersData.data); // Assuming the user data is in the "data" property
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.user_id}>{user.fullname}</li>
          ))}
        </ul>
      )}

      <span onClick={() => realTimePageReloader()}>Home</span>
    </div>
  );
}
