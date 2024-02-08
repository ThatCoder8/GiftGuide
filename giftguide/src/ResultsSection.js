// ResultsSection.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResultsSection = ({ userInputs }) => {
  const [gifts, setGifts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch gifts based on userInputs (age and gender)
    // Update state with fetched data
    // For now, using a sample array
    const sampleGifts = [
      { id: 1, name: 'Book', age: userInputs.age, gender: userInputs.gender },
      { id: 2, name: 'Headphones', age: userInputs.age, gender: userInputs.gender },
      { id: 3, name: 'Art Supplies', age: userInputs.age, gender: userInputs.gender },
      // Add more data as needed
    ];
    setGifts(sampleGifts);
  }, [userInputs]);

  const handleBackButtonClick = () => {
    navigate('/'); // Navigate to the quiz page
  };

  return (
    <div>
      <h1>Gift Guide Results</h1>
      <button onClick={handleBackButtonClick}>Back to Quiz</button>
      <ul>
        {gifts.map((gift) => (
          <li key={gift.id}>
            {gift.name} - Age: {gift.age}, Gender: {gift.gender}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsSection;

