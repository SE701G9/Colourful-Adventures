import Stars from "./Stars";
import './StarsPopUp.css';

type TwoStarPopUpProps = {
      children: React.ReactNode;
}

const TwoStarPopUp = () => {

      return(
      <div className = "reward-layout">
            <Stars
                  src = {require('../../images/reward-images/twoStar.png')}
                  alt = {"No stars"}
                  />
            <h1> Default Text Stuff</h1>
      </div>
      );
}

export default TwoStarPopUp;