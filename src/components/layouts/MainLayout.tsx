import React, { useState } from 'react';
import './MainLayout.css';
import SettingsButton from '../settings/SettingsButton';
import ModalContainer from './ModalContainer';
import Settings from '../settings/Settings';

type MainLayoutProps = {
  children: React.ReactNode;
  isDarkBg?: boolean;
};

const MainLayout = ({ children, isDarkBg }: MainLayoutProps) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const toggleSettings = () => setIsSettingsOpen((prev) => !prev);

  return (
    <div className={`module-layout-container ${isDarkBg ? 'bg' : ''}`}>
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
    </div>
  );
};

export default MainLayout;
