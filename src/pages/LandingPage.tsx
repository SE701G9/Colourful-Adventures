import React from "react";
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log("clicked");
    navigate('/modules');
  }

  return (
    <div>
      <h1>Colour Adventures</h1>
      <button onClick={handleClick}> - Start - </button>
    </div> 
  )
}