import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './DialogueButton.css';

type DialogueButtonProps = {
  children: React.ReactNode;  
  onClick: () => void;
};

const DialogueButton = ({ onClick}: DialogueButtonProps) => (
  <button
    className={'dialogue-button'}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faCaretDown} style={{color: "#331708",}} />
  </button>
);

export default DialogueButton;