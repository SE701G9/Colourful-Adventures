// im not sure about the naming of this page,
// if it's changed just make sure to change it everywhere else

import Selections from '../components/Selections';

export default function ModuleOnePage() {
  const selections = [
    {
      label: 'Who am I',
      onClick: () => console.log('Who am I clicked'),
    },
    {
      label: 'Remembering',
      onClick: () => console.log('Remembering clicked'),
    },
    {
      label: 'Start of Journey',
      onClick: () => console.log('Start of Journey clicked'),
    },
  ];
  return (
    <div>
      <Selections
        title="Basic Color Wheel"
        subTitle="Primary & Secondary Colors"
        selections={selections}
      />
    </div>
  );
}
