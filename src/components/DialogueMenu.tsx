import DialogueName from "./DialogueName";
import DialogueBox from "./DialogueBox";
import './DialogueMenu.css';

type DialogueMenuProps = {
    name : string;
    message : string;
    children : React.ReactNode; 
}

const DialogueMenu = ({name,message}: DialogueMenuProps) => {



    return(
        <div className="dialogue-menu">
        <DialogueName
            name = {name}>
        </DialogueName>
        <DialogueBox
            message = {message}>
        </DialogueBox>
    </div>
    );

}

export default DialogueMenu