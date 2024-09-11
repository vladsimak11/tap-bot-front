import styled from 'styled-components';

export const AppBlock = styled.div`
  text-align: center;
  padding-top: 40px;
`;

export const ButtonTap = styled.button`
  width: 80px;
  height: 80px;
  background-color: #ffcc00;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  }
`;

