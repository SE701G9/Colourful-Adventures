import { useNavigate } from "react-router-dom";
import BackButton from "../components/navigation/BackButton";


export default function Module3Page() {
  const navigate = useNavigate();

  const goBack= () => {
    navigate('/modules')
  };
  return (
    <div>
    <BackButton
        onClick={goBack}
        />
      <h1>Third module: Colour Concepts</h1>
    </div>
  )
}