import React, { useState } from 'react';

import { AppBlock, ButtonTap, AppHeader, AppScore } from './App.styled';

export const App = () => {
  const [score, setScore] = useState(0);

  const handleClick = () => {
    setScore(score + 1);
  };

  return (
    <AppBlock>
      <header>
        <AppHeader>Tap Bucket Game</AppHeader>
        <AppScore>Score: {score}</AppScore>
        <ButtonTap onClick={handleClick}>Tap me!</ButtonTap>
      </header>
    </AppBlock>
  );
};
