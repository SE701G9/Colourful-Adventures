import React from 'react';
import './SelectionButton.css';

type SelectionButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const SelectionButton = ({ children, onClick }: SelectionButtonProps) => {
  return (
    <button className="select-button" onClick={onClick}>
      <img src={require('../../images/selection-button.png')} />
      <span className="selection-button-label">{children}</span>
    </button>
  );
};

export default SelectionButton;
