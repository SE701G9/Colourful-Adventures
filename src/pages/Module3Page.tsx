import MainLayout from "../components/layouts/MainLayout";
import NoStarsPopUp from "../components/rewards/NoStarsPopUp";
import OneStarPopUp from "../components/rewards/OneStarPopUp";
import TwoStarPopUp from "../components/rewards/TwoStarPopUp";


export default function Module3Page() {
  return (
    <MainLayout>
      <h1>Third module: Colour Concepts</h1>
      <TwoStarPopUp/>
    </MainLayout>
  )
}