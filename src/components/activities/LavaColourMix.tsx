import MixingBox from '../ColourMixComponents/MixingBox';
import DialogueMenu from '../dialogue/DialogueMenu';
import MainLayout from '../layouts/MainLayout';
import OrangeColourButton from "../ColourMixComponents/OrangeColourButton";
import RedColourButton from '../ColourMixComponents/RedColourButton';
import YellowColourButton from '../ColourMixComponents/YellowColourButton';
import './LavaColourMix.css';
import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';


const LavaColourMix = () => {

  const [dialogue, setDialogue] = useState({name: "Caramel", message: "Okay! Let’s find out where we are now."});
  const [isActivityDone, setActivityDone] = useState<boolean>(false); // to hide/show activity and make dialogue/background changes 
  const [isDialogueSet, setIsDialogueSet] = useState<boolean>(false);
  const [areColoursMixed, setColoursMixed] = useState<boolean>(false);
  const navigate = useNavigate();

  type DialogueData = {
    name: string;
    message: string;
  }

  const [dialogueArray, setDialogueArray] = useState<{name: string; message: string}[]>([{name: "Caramel", message: "Try playing around and combining red and yellow, let’s see what happens~"}]);
  const [count, setCount] = useState(0);

  const addDialogue = ({name, message}: DialogueData) => {
    setDialogueArray(dialogueArray => [...dialogueArray,{name,message}])
  }

  const incrementCount = () => {
    setCount(count => count + 1);
  }

  const changeDialogueData = () => {
    if(!isDialogueSet){
        setUpDialogue();
        setIsDialogueSet(true);
    }
    const newDialougeData = dialogueArray[count];
    try {
      setDialogue({...dialogue, name: newDialougeData.name, message: newDialougeData.message});
      incrementCount();
    } catch (err) {
      if (isActivityDone) {
        navigate('/activities/colour-mix-grass')
      }
    }
    
  }

  const setUpDialogue = () => {

    // addDialogue({name: "Caramel", message: "Try playing around and combining red and yellow, let’s see what happens~"});
  }

  const mixColours = () => {
    setColoursMixed(true)
  }

  const markActivityDone = () => {
    setDialogue({name: "Picasso", message: "L-LAVA!? This was here the whole time!?"});
    addDialogue({name: "Picasso", message: "I… I shouldn’t have mixed red and yellow together."});
    addDialogue({name: "Picasso", message: "This is…let’s, let’s go back."});
    addDialogue({name: "Caramel", message: "This just happens to be where we are, silly."});
    addDialogue({name: "Caramel", message: "Look at how you made orange, with the brightness from red and warmness from yellow! Feel that heat!?"});
    addDialogue({name: "Picasso", message: "Orange must be a cursed colour…"});
    addDialogue({name: "Caramel", message: "If we mix primary colours together, they make a new, special colour. These are called secondary colours. "});
    addDialogue({name: "Caramel", message: "That is why when you mix red and yellow together, it creates a new colour - orange! "});
    setActivityDone(true);

  }

  return (
    <MainLayout>
      <main className="lava-container">
      {!isActivityDone ?
        <>
          <MixingBox />
          <div className="colour-mix-area" onClick={mixColours}>

          {!areColoursMixed ? 
            <div className="mixing-box">
              <div className="not-mixed-colours">
                <div className="button-1">
                  <YellowColourButton />
                </div>

                <div className="button-2">
                  <RedColourButton />
                </div>
                <div className="suggestion-text ">
                  <h2>Click on the colour circles and let's see what happen!</h2>
                </div>
              </div>
            </div> :
            <div className="mixing-box">
              <div className="mixed-colours">
                <div className="button-2">
                  <OrangeColourButton onclick={markActivityDone}/>
                </div>
                <div className="prompt-text">
                  <h2>Click on the button to reveal where you are!</h2>
                </div>
              </div>
            </div>
          }
          </div>
        </>
          : 
          <div className='lava-background'>
          </div>
        }
        
        <DialogueMenu
            name= {dialogue.name}
            message = {dialogue.message}
            onclick = {changeDialogueData} />
      </main>
    </MainLayout>
  );
};

export default LavaColourMix;