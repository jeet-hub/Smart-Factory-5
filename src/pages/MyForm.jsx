import React, { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.example.com/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Handle success
        console.log('Data sent successfully!');
      } else {
        // Handle error
        console.error('Error sending data.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
