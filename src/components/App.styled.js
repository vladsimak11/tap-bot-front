import styled from 'styled-components';

export const AppBlock = styled.div`
  text-align: center;
  background-color: blueviolet;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 40px;
`;

export const AppHeader = styled.h1`
  color: white;
`;

export const AppScore = styled.h1`
  color: white;
`;

export const ButtonTap = styled.button`
  width: 150px;
  height: 150px;
  margin-top: 40px;
  font-size: 1.7rem;
  background-color: #ffcc00;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
  outline: none;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none; 
  }
`;

