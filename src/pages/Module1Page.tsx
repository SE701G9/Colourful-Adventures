// im not sure about the naming of this page,
// if it's changed just make sure to change it everywhere else

import MainLayout from '../components/layouts/MainLayout';
import Selections from '../components/selection/Selections';

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
      label: 'Through the Lands',
      onClick: () => console.log('Start of Journey clicked'),
    },
  ];
  return (
    <MainLayout>
      <Selections
        title="Basic Color Wheel"
        subTitle="Primary & Secondary Colors"
        selections={selections}
      />
    </MainLayout>
  );
}
