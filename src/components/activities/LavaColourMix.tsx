import MixingBox from '../ColourMixComponents/MixingBox';
import DialogueMenu from '../dialogue/DialogueMenu';
import MainLayout from '../layouts/MainLayout';
import './LavaColourMix.css';

import { useState } from 'react'; 


const LavaColourMix = () => {

  const [dialogue, setDialogue] = useState({name: "Caramel", message: "Okay! Let’s find out where we are now."});
  // const [isActivityDone, setActivityDone] = useState<boolean>(false); // to hide/show activity and make dialogue/background changes 

  type DialogueData = {
    name: string;
    message: string;
  }

  const [dialogueArray, setDialogueArray] = useState<{name: string; message: string}[]>([{name: "Caramel", message: "Try playing around and combining red and yellow, let’s see what happens~"}]);
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

  // Post-activity dialogue 
  const setUpDialogue = () => {
    addDialogue({name: "Picasso", message: "L-LAVA!? This was here the whole time!?"});
    addDialogue({name: "Picasso", message: "I… I shouldn’t have mixed red and yellow together."});
    addDialogue({name: "Picasso", message: "This is…let’s, let’s go back."});
    addDialogue({name: "Caramel", message: "This just happens to be where we are, silly."});
    addDialogue({name: "Caramel", message: "Look at how you made orange, with the brightness from red and warmness from yellow! Feel that heat!?"});
    addDialogue({name: "Picasso", message: "Orange must be a cursed colour…"});
  }

  return (
    <MainLayout>
      <main className="lava-container">
        <MixingBox />
        <DialogueMenu
            name= {dialogue.name}
            message = {dialogue.message}
            onclick = {changeDialogueData}>
        </DialogueMenu>
      </main>
    </MainLayout>
  );
};

export default LavaColourMix;