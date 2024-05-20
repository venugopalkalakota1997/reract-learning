import React, { useState, useEffect } from 'react';

const Assignment2 = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setUsers(data);
      setLoading(false);
    }, 2000); 
    console.log('UserList component mounted');
  }, []);

  return (
    <div className="user-list">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ol>
          {users.map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

const data = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  { id: 4, name: 'David', email: 'david@example.com' },
];

export default Assignment2;
