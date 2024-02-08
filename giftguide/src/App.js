// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizSection from './QuizSection';
import ResultsSection from './ResultsSection';

function App() {
  const [userInputs, setUserInputs] = useState({});

  const handleUserInputs = (inputs) => {
    setUserInputs(inputs);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<QuizSection onUserInputs={handleUserInputs} />}
        />
        <Route path="/results" element={<ResultsSection userInputs={userInputs} />} />
      </Routes>
    </Router>
  );
}

export default App;

