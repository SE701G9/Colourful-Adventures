import MainLayout from "../layouts/MainLayout";
import MixingBox from '../ColourMixComponents/MixingBox';
import DialogueMenu from '../dialogue/DialogueMenu';
import BlueColourButton from '../ColourMixComponents/BlueColourButton';
import RedColourButton from '../ColourMixComponents/RedColourButton';
import "./LakeColourMix.css";
import { PureComponent, useState } from 'react'; 
import PurpleColourButton from "../ColourMixComponents/PurpleColourButton";
import { useNavigate } from "react-router-dom";


const LakeColourMix = () => {

  type DialogueData = {
    name: string;
    message: string;
  }

  const [dialogue, setDialogue] = useState({name: "", message: "Mix red and blue to see where Picasso and Caramel will be resting."});
  const [dialogueArray, setDialogueArray] = useState<{name: string; message: string}[]>([{name: "Picasso", message: "Wow… This is wonderful!"}]);
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
      navigate('/modules/1')
    }
  }

  // Post-activity dialogue 
  const setUpDialogue = () => {
    addDialogue({name: "Picasso", message: "We got purple from mixing red and blue."});
    addDialogue({name: "Caramel", message: "A romantic night by the lake~"});
    addDialogue({name: "Caramel", message: "The reflection of the sky on the lake made the water look purple, too! Isn’t that amazi-"});
    addDialogue({name: "Picasso", message: "Zzzz… purple… zzz…"});
  }

  const mixColours = () => {
    setColoursMixed(true)
  }

  const markActivityDone = () => {
    setActivityDone(true);
  }


  return (
    <MainLayout>
      <main className="lake-container">
      {!isActivityDone ?
        <>
          <MixingBox />
          <div className="colour-mix-area" onClick={mixColours}>

          {!areColoursMixed ? 
            <div className="mixing-box">
              <div className="not-mixed-colours">
                <div className="button-1">
                  <RedColourButton />
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
                  <PurpleColourButton onclick={markActivityDone}/>
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
          <div className='lake-background'>
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

export default LakeColourMix;
