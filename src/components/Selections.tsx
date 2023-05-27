import SelectionButton from './SelectionButton';
import './Selections.css';
import MainLayout from './layouts/MainLayout';

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
  <MainLayout>
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
        <img className="selections-ball" src={require('../images/ball.png')} />
      </div>
    </div>
  </MainLayout>
);

export default Selections;
