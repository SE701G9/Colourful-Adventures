import Stars from "./Stars";
import './StarsPopUp.css';

type NoStarsPopUpProps = {
      children: React.ReactNode;
}

const NoStarsPopUp = () => {

      return(
      <div className = "reward-layout">
            <Stars
                  src = {require('../../images/reward-images/noStars.png')}
                  alt = {"No stars"}
                  />
            <h1> Default Text Stuff</h1>
      </div>
      );
}

export default NoStarsPopUp;