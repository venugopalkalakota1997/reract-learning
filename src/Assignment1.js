import React from 'react';

const Assignment1 = () => {
  const students = [
    { id: 1, name: 'Alice', age: 20, present: true },
    { id: 2, name: 'Bob', age: 22, present: false },
    { id: 3, name: 'Charlie', age: 21, present: true },
    { id: 4, name: 'David', age: 23, present: false },
  ];

  return (
    <div>
      <h2>Students Details</h2>
      <ol>
        {students.map(student => (
          <li key={student.id}>
            {student.name} - {student.present ? 'Present' : 'Absent'}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Assignment1;
