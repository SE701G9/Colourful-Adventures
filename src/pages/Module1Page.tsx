// im not sure about the naming of this page,
// if it's changed just make sure to change it everywhere else

import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import Selections from '../components/selection/Selections';

export default function ModuleOnePage() {
  const navigate = useNavigate();
  const selections = [
    {
      label: 'Who am I',
      onClick: () => navigate('/modules/1/who-am-i'),
    },
    {
      label: 'Remembering',
      onClick: () => navigate('/modules/1/remembering-1'),
    },
    {
      label: 'Through the Lands',
      onClick: () => navigate('/modules/1/land-1'),
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
