import React from "react";
import './DialogueBox.css';
import DialogueButton from "./DialogueButton";

/*type DialogueProps = {
    children : React.ReactNode;
}*/

const changeDialogue = () => {
    alert('Hello!');
}

interface DialogueProps{
    message: string;
}

function Dialogue(props: DialogueProps){
    return <h1> {props.message} </h1>
}


const DialogueBox = () => (
    <div className="dialogue-box">{}
        <div className="dialogue-message">
            <Dialogue 
                message= "Poor bird… That’s okay! Caramel can help you remember who you are. Don’t you worry!"/>
        </div>
        <DialogueButton 
            onClick={changeDialogue}>
        </DialogueButton>
    </div>
);

export default DialogueBox;
