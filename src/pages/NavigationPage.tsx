import React from "react";
import DialogueMenu from "../components/DialogueMenu";
import './NavigationPage.css'

export default function NavigationPage() {
  return (
    <><div className="Nav">
      <h1>Modules Page</h1>
      <ul>
        <li>First module: Basic Colour Wheel</li>
        <li>Second module: Advanced Colour Wheel</li>
        <li>Third module: Colour Concepts</li>
      </ul>
      {/*Just using the Navigation Page to test out the Dialogue Menu, please ignore for now. I will remove it when the game pages are setup*/}
      <div className="dialogue-menu">
        <DialogueMenu
          name = "Picasso"
          message = "Poor bird… That’s okay! Caramel can help you remember who you are. Don’t you worry!">
        </DialogueMenu>
      </div>
      </div>
    </>
    
  )
}