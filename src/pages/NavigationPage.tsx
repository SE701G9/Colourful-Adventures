import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import SettingsButton from '../components/SettingsButton';
import Settings from '../components/Settings';
import ModalContainer from '../components/ModalContainer';
import './NavigationPage.css';
import Module1Card from "../components/Module1Card";
import Module2Card from "../components/Module2Card";
import Module3Card from "../components/Module3Card";

export default function NavigationPage() {
  const navigate = useNavigate();
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  const toggleSettings = () => setIsSettingsOpen((prev) => !prev);


  return (
    <main className="navigation-page">
      <SettingsButton
        isSettingsOpen={isSettingsOpen}
        onClick={toggleSettings}
      />
      <div className="navigation-page-top-container">
        <img src={require('../images/navigation-images/title.png')} alt="Choose a topic"  />
      </div>
      <div className="navigation-page-center-container">
        <Module1Card/>
        <Module2Card/>
        <Module3Card/>
      </div>
      {isSettingsOpen && (
        <ModalContainer>
          <Settings />
        </ModalContainer>
      )}
    </main>
  )
}