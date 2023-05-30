import DialogueName from './DialogueName';
import DialogueBox from './DialogueBox';
import './DialogueMenu.css';

type DialogueMenuProps = {
  name: string;
  message: string;
  onclick: () => void;
  choices?: { label: string; nextPage: number }[];
  handleChoiceClick?: (nextPage: number) => void;
};

const DialogueMenu = ({
  name,
  message,
  onclick,
  choices,
  handleChoiceClick,
}: DialogueMenuProps) => {
  return (
    <div className="dialogue-menu">
      {choices && handleChoiceClick && (
        <div className="choice-box">
          {choices.map((choice, idx) => (
            <li onClick={() => handleChoiceClick(choice.nextPage)} key={idx}>
              {choice.label}
            </li>
          ))}
        </div>
      )}
      <DialogueName name={name}></DialogueName>
      <DialogueBox message={message} onclick={onclick}></DialogueBox>
    </div>
  );
};

export default DialogueMenu;
