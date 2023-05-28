import React from "react";
import './DialogueBox.css';
import DialogueButton from "./DialogueButton";

type DialogueBoxProps = {
    message : string;
    children : React.ReactNode;
}

/*Will need to change this method, likely will need another prop that is put into DialogueMenu from the pages that use it to send through an onclick method*/
const changeDialogue = () => {
    alert('Hello!');
}

interface DialogueProps{
    message: string;
}

function Dialogue(props: DialogueProps){
    return <h1> {props.message} </h1>
}


const DialogueBox = ({message}: DialogueBoxProps) => (
    <div className="dialogue-box">{}
        <div className="dialogue-message">
            <h1> {message}</h1>
        </div>
        <DialogueButton 
            onClick={changeDialogue}>
        </DialogueButton>
    </div>
);

export default DialogueBox;
