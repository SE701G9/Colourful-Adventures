import Stars from "./Stars";
import './StarsPopUp.css';

type OneStarPopUpProps = {
      children: React.ReactNode;
}

const OneStarPopUp = () => {

      return(
      <div className = "reward-layout">
            <Stars
                  src = {require('../../images/reward-images/oneStar.png')}
                  alt = {"No stars"}
                  />
            <h1> Default Text Stuff</h1>
      </div>
      );
}

export default OneStarPopUp;