import React, { useState } from 'react';
import './MainLayout.css';
import SettingsButton from '../settings/SettingsButton';
import ModalContainer from '../ModalContainer';
import Settings from '../settings/Settings';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const toggleSettings = () => setIsSettingsOpen((prev) => !prev);

  return (
    <div className="module-layout-container">
      <SettingsButton
        isSettingsOpen={isSettingsOpen}
        onClick={toggleSettings}
      />
      {isSettingsOpen && (
        <ModalContainer>
          <Settings />
        </ModalContainer>
      )}
      {children}
      <img
        className="mascot-image"
        src={require('../../images/mascot_1.png')}
      />
    </div>
  );
};

export default MainLayout;
