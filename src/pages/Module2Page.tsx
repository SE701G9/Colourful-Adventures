import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import BackButton from '../components/navigation/BackButton';

export default function Module2Page() {

  const navigate = useNavigate();

  const goBack= () => {
    navigate('/modules')
  };

  return (
    <div>
      <BackButton
        onClick={goBack}
        />
      <MainLayout>
        <div></div>
      </MainLayout>
    </div>
  );
}
