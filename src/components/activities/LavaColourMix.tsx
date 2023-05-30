import DialogueMenu from '../dialogue/DialogueMenu';
import '../dialogue/DialogueBox.css';
import MainLayout from '../layouts/MainLayout';
import './LavaColourMix.css';
import { useState } from 'react'; 


const LavaColourMix = () => {

  // TODO: CHANGE DIALOGUE 
  const [dialogue, setDialogue] = useState({name: "Caramel", message: "Okay! Let’s find out where we are now."});

  const handleClick = () => {
  }

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
    const setUpDialogue = () => {
        addDialogue({name: "???", message: "Where... am I?"});
    }

  return (
    <MainLayout>
      <main className="lava-container">
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
