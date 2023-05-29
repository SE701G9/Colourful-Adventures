import SelectionButton from './SelectionButton';
import './Selections.css';

type SelectionInfo = {
  label: string;
  onClick: () => void;
};

type SelectionsProps = {
  title: string;
  subTitle: string;
  selections: SelectionInfo[];
};

const Selections = ({ title, subTitle, selections }: SelectionsProps) => (
  <div className="selections-container">
    <div className="selections-header">
      <h1 className="selections-title">{title}</h1>
      <p className="selections-topic">{subTitle}</p>
    </div>
    <div className="selections-body">
      <div className="selections-buttons">
        {selections.map((selection) => (
          <SelectionButton key={selection.label} onClick={selection.onClick}>
            {selection.label}
          </SelectionButton>
        ))}
      </div>
      <img className="selections-ball" src={require('../../images/ball.png')} />
    </div>
  </div>
);

export default Selections;
