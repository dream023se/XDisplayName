import React, { useState } from 'react';

function FullNameForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.trim() && lastName.trim()) {
      setFullName(`${firstName.trim()} ${lastName.trim()}`);
      setError('');
    } else {
      setFullName('');
      setError('Please fill in both first and last names.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Full Name Display</h1>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {fullName && <p>Full Name: {fullName}</p>}
    </form>
  );
}

export default FullNameForm;
