import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SettingsButton from '../components/SettingsButton';
import './LandingPage.css';
import ModalContainer from '../components/ModalContainer';
import Settings from '../components/Settings';

export default function LandingPage() {
  const navigate = useNavigate();
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  const toggleSettings = () => setIsSettingsOpen((prev) => !prev);

  const handleClick = () => {
    navigate('/modules');
  };

  return (
    <main className="landing-page">
      <SettingsButton
        isSettingsOpen={isSettingsOpen}
        onClick={toggleSettings}
      />
      <div className="landing-page-center-container">
        <img src={require('../images/title.png')} />
        <button onClick={handleClick}>- Start -</button>
      </div>
      {isSettingsOpen && (
        <ModalContainer>
          <Settings />
        </ModalContainer>
      )}
    </main>
  );
}
