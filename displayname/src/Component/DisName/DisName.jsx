import React, { useState } from 'react';

function FullNameForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
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
      <button type="submit" disabled={!firstName || !lastName}>
        Submit
      </button>
      <div>
        {fullName && <p>Full Name: {fullName}</p>}
      </div>
    </form>
  );
}

export default FullNameForm;
