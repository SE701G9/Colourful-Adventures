import './GamePage.css';
import DialogueMenu from '../components/dialogue/DialogueMenu';
import { useState } from 'react'; 
// import { useQueueState } from "rooks";

export default function GamePage(){

type DialogueData = {
    name: string;
    message: string;
}

    const [dialogue, setDialogue] = useState({name: "Narrator", message: "One morning, in a faraway land…"});
    const [dialogueArray, setDialogueArray] = useState<{name: string; message: string}[]>([{name: "???", message: "Who… am I?"}]);
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

    return(

        <main className='game-page'>

            <DialogueMenu
            name= {dialogue.name}
            message = {dialogue.message}
            onclick = {changeDialogueData}>
            </DialogueMenu>
        </main>
    )

}