import React, { useState } from 'react';

import { AppBlock, ButtonTap } from './App.styled';

export const App = () => {
  const [score, setScore] = useState(0);

  const handleClick = () => {
    setScore(score + 1);
  };

  return (
    <AppBlock>
      <header>
        <h1>Tap Bucket Game</h1>
        <p>Score: {score}</p>
        <ButtonTap onClick={handleClick}>Tap me!</ButtonTap>
      </header>
    </AppBlock>
  );
}

