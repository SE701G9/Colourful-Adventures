import './DialogueName.css';

type DialogueNameProps = {
  name: string;
};

const DialogueName = ({ name }: DialogueNameProps) => (
  <div className="dialogue-name">
    <h1> {name}</h1>
  </div>
);

export default DialogueName;
