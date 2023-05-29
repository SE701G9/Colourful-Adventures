import React from "react";
import './DialogueBox.css';
import DialogueButton from "./DialogueButton";

type DialogueBoxProps = {
    message : string;
    onclick: () => void;
    children : React.ReactNode;
}

interface DialogueProps{
    message: string;
}

function Dialogue(props: DialogueProps){
    return <h1> {props.message} </h1>
}


const DialogueBox = ({message, onclick}: DialogueBoxProps) => (
    <div className="dialogue-box">{}
        <div className="dialogue-message">
            <h1> {message}</h1>
        </div>
        <DialogueButton 
            onClick={onclick}>
        </DialogueButton>
    </div>
);

export default DialogueBox;
