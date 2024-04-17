import React from 'react';
import { PopupContainer } from './styles';

interface PopupComponentProps {
    onClose: () => void;           
    // content: React.ReactNode;     
    content: string;     
  }

const PopupComponent: React.FC<PopupComponentProps> = ({ onClose, content }) => {
  return (
    <PopupContainer>
      <h2>More Information</h2>
      <p>{content}</p>
      <button onClick={onClose}>Close</button>
    </PopupContainer>
  );
};

export default PopupComponent;
