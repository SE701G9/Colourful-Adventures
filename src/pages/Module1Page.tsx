// im not sure about the naming of this page,
// if it's changed just make sure to change it everywhere else

import React from 'react'
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import Selections from '../components/selection/Selections';
import BackButton from '../components/navigation/BackButton';

export default function ModuleOnePage() {

  const navigate = useNavigate();

  const goBack= () => {
    navigate('/modules')
  };

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
      <BackButton
        onClick={goBack}
        />
      <Selections
        title="Basic Color Wheel"
        subTitle="Primary & Secondary Colors"
        selections={selections}
      />
    </MainLayout>
  );
}
