import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log('clicked');
    navigate('/modules');
  };

  return (
    <div className="landing-page">
      <div className="landing-page-center-container">
        <img src={require('../images/title.png')} />
        <button onClick={handleClick}>- Start -</button>
      </div>
    </div>
  );
}
