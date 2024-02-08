import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-dom-confetti';

const QuizSection = ({ onUserInputs }) => {
  const [userInput, setUserInput] = useState({ bestGift: '', age: '', gender: '' });
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
      onUserInputs(userInput);
      navigate('/results'); // Use navigate from react-router-dom instead of history
    }, 3000);
  };

  return (
    <div>
      <h1>Gift Quiz</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Your Best Gift:
          <input type="text" name="bestGift" value={userInput.bestGift} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Your Age:
          <input type="text" name="age" value={userInput.age} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Your Gender:
          <input type="text" name="gender" value={userInput.gender} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <Confetti active={showConfetti} config={{ spread: 180 }} />
    </div>
  );
};

export default QuizSection;
