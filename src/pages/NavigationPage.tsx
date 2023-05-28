import React from "react";
import DialogueBox from '../components/DialogueBox';

export default function NavigationPage() {
  return (
    <>
      <h1>Modules Page</h1>
      <ul>
        <li>First module: Basic Colour Wheel</li>
        <li>Second module: Advanced Colour Wheel</li>
        <li>Third module: Colour Concepts</li>
      </ul>
      <div>
        <DialogueBox></DialogueBox>
      </div>
    </>
    
  )
}