import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SettingsButton.css';

type SettingsButtonProps = {
  onClick: () => void;
  isSettingsOpen: boolean;
};

const SettingsButton = ({ onClick, isSettingsOpen }: SettingsButtonProps) => (
  <button
    className={`settings-button ${isSettingsOpen ? 'glow' : 'unglow'}`}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faCog} />
  </button>
);

export default SettingsButton;
