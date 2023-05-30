import MainLayout from "../components/layouts/MainLayout";
import NoStarsPopUp from "../components/rewards/NoStarsPopUp";
import OneStarPopUp from "../components/rewards/OneStarPopUp";
import ThreeStarPopUp from "../components/rewards/ThreeStarPopUp";
import TwoStarPopUp from "../components/rewards/TwoStarPopUp";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/navigation/BackButton";


export default function Module3Page() {
  const navigate = useNavigate();

  const goBack= () => {
    navigate('/modules')
  };
  return (
    <MainLayout>
    <BackButton
        onClick={goBack}
        />
      <h1>Third module: Colour Concepts</h1>
      <ThreeStarPopUp/>
    </MainLayout>
  )
}