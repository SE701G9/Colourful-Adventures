import MainLayout from '../components/layouts/MainLayout';
import Selections from '../components/selection/Selections';
import { useNavigate } from 'react-router-dom';


export default function ModuleOnePage() {
  const navigate = useNavigate();

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
      onClick: () => { navigate("/through-the-lands") },
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
