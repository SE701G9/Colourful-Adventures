import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BackButton.css';

type BackButtonProps = {
    onClick: () => void;
};

const BackButton = ({onClick}: BackButtonProps) => (
    <button
      className={'back-button'}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faCaretLeft} size="xl" style={{color: "#331708",}} />
    </button>
  );

export default BackButton;