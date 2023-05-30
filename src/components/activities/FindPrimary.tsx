import MainLayout from '../layouts/MainLayout';
import DialogueMenu from '../dialogue/DialogueMenu';
import './FindPrimary.css';
import { useState } from 'react'


const FindPrimary = () => {

  type DialogueData = {
    name: string;
    message: string;
  } 

  const [dialogue, setDialogue] = useState({name: "Narrator", message: "Help the parrot regain his memory!"})
  const [dialogueArray, setDialogueArray] = useState<{name: string; message: string}[]>([{name: "Narrator", message: "Find the items: Red Worms, Yellow Keys, and Blue Blanket"}]);
  const [count, setCount] = useState(0);
  const [isDialogueSet, setIsDialogueSet] = useState<boolean>(false);

  const addDialogue = ({name, message}: DialogueData) => {
    setDialogueArray(dialogueArray => [...dialogueArray,{name,message}])
  }

  const incrementCount = () => {
    setCount(count => count + 1);
  }

  const changeDialogueData = () => {
    if(!isDialogueSet){
        setUpDialogue();
        setIsDialogueSet(true);
    }
    const newDialougeData = dialogueArray[count];
    setDialogue({...dialogue, name: newDialougeData.name, message: newDialougeData.message});
    incrementCount();
  }

  /* Use this method to setup the whole dialogue for a page*/
  const setUpDialogue = () => {
    addDialogue({name: "???", message: "Where... am I?"});
  }

  const handleWorm = () => {
    console.log('Red Worm Clicked');
  }

  const handleKey = () => {
    console.log('Yellow Key Clicked');
  }

  const handleBlanket = () => {
    console.log('Blue Blanket Clicked');
  }
  
  return (
    <MainLayout>
      <main className="find-primary-container">
        
        <DialogueMenu
          name = {dialogue.name}
          message = {dialogue.message}
          onclick = {changeDialogueData}>
        </DialogueMenu>
        <button onClick={handleWorm}>Red Worm</button>
        <button onClick={handleKey}>Yellow Key</button>
        <button onClick={handleBlanket}>Blue Blanket</button>
      </main>
    </MainLayout>
  )
}

export default FindPrimary;
