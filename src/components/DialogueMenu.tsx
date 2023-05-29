import DialogueName from "./DialogueName";
import DialogueBox from "./DialogueBox";
import './DialogueMenu.css';

type DialogueMenuProps = {
    name : string;
    message : string;
    onclick: () => void;
    children : React.ReactNode; 
}

const DialogueMenu = ({name,message,onclick}: DialogueMenuProps) => {

    return(
        <div className="dialogue-menu">
        <DialogueName
            name = {name}>
        </DialogueName>
        <DialogueBox
            message = {message}
            onclick = {onclick}>
        </DialogueBox>
    </div>
    );

}

export default DialogueMenu