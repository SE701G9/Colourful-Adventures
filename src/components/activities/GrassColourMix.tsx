import MainLayout from '../layouts/MainLayout';
import MixingBox from '../ColourMixComponents/MixingBox';
import DialogueMenu from '../dialogue/DialogueMenu';
import './GrassColourMix.css';
import { useState } from 'react'; 
import BlueColourButton from '../ColourMixComponents/BlueColourButton';
import YellowColourButton from '../ColourMixComponents/YellowColourButton';
import GreenColourButton from '../ColourMixComponents/GreenColourButton';
import { useNavigate } from 'react-router-dom';


const GrassColourMix = () => {
  const [dialogue, setDialogue] = useState({name: "", message: "Play around with the colours blue and yellow to help Picasso and Caramel get to their next destination!"});
  
  type DialogueData = {
    name: string;
    message: string;
  }

  const [dialogueArray, setDialogueArray] = useState<{name: string; message: string}[]>([]);
  const [count, setCount] = useState(0);
  const [isDialogueSet, setIsDialogueSet] = useState<boolean>(false);
  const [isActivityDone, setActivityDone] = useState<boolean>(false);
  const [areColoursMixed, setColoursMixed] = useState<boolean>(false);
  const navigate = useNavigate();

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
        navigate('/activities/colour-mix-lake');
      }
    }
  }

  // Post-activity dialogue 
  const setUpDialogue = () => {
    
  }

  const mixColours = () => {
    setColoursMixed(true)
  }

  const markActivityDone = () => {
    setActivityDone(true);
    setDialogue({name: "Picasso", message: "Whoa! This place is SO much better than the lava!"});
    addDialogue({name: "Picasso", message: "The fresh air is so calming and relaxing…"});
    addDialogue({name: "Caramel", message: "Seems like we’re in a grassland. Blue and yellow are two primary colours, and…"});
    addDialogue({name: "Picasso", message: "They make green, a secondary colour. Right?"});
    addDialogue({name: "Caramel", message: "Exactly!"});
  }

  return (
    <MainLayout>
      <main className="grass-container">
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
                  <BlueColourButton />
                </div>
                <div className="suggestion-text ">
                  <h2>Click on the colour circles and let's see what happen!</h2>
                </div>
              </div>
            </div> :
            <div className="mixing-box">
              <div className="mixed-colours">
                <div className="button-2">
                  <GreenColourButton onclick={markActivityDone}/>
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
          <div className='grass-background'>
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

export default GrassColourMix;
