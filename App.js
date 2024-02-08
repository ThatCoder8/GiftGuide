import React, { useState } from 'react';

function QuizSection({ onSubmit }) {
  const [formData, setFormData] = useState({
    bestGift: '',
    age: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data here

    // Send form data to parent component using onSubmit
    onSubmit(formData); // Corrected this line
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Your Best Gift:
        <input
          type="text"
          name="bestGift"
          value={formData.bestGift}
          onChange={handleChange}
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </label>
      <label>
        Gender:
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default QuizSection;