import Stars from "./Stars";
import './StarsPopUp.css';

type ThreeStarPopUpProps = {
      children: React.ReactNode;
}

const ThreeStarPopUp = () => {

      return(
      <div className = "reward-layout">
            <Stars
                  src = {require('../../images/reward-images/threeStar.png')}
                  alt = {"No stars"}
                  />
            <h1> Default Text Stuff</h1>
      </div>
      );
}

export default ThreeStarPopUp;