import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import SettingsButton from '../components/SettingsButton';
import Settings from '../components/Settings';
import ModalContainer from '../components/ModalContainer';
import './NavigationPage.css';
import ModuleCard from "../components/ModuleCard";

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
        <ModuleCard/>
        <ModuleCard/>
        <ModuleCard/>
      </div>
      {isSettingsOpen && (
        <ModalContainer>
          <Settings />
        </ModalContainer>
      )}
    </main>
  )
}