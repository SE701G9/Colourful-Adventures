import MainLayout from '../layouts/MainLayout';
import MixingBox from '../ColourMixComponents/MixingBox';
import DialogueMenu from '../dialogue/DialogueMenu';
import './GrassColourMix.css';
import { useState } from 'react'; 
import BlueColourButton from '../ColourMixComponents/BlueColourButton';
import YellowColourButton from '../ColourMixComponents/YellowColourButton';
import GreenColourButton from '../ColourMixComponents/GreenColourButton';


const GrassColourMix = () => {
  const [dialogue, setDialogue] = useState({name: "", message: "Play around with the colours blue and yellow to help Picasso and Caramel get to the next place!"});
  // const [isActivityDone, setActivityDone] = useState<boolean>(false); // to hide/show activity and make dialogue/background changes 

  type DialogueData = {
    name: string;
    message: string;
  }

  const [dialogueArray, setDialogueArray] = useState<{name: string; message: string}[]>([{name: "Picasso", message: " Whoa! This place is SO much better than the lava!"}]);
  const [count, setCount] = useState(0);
  const [isDialogueSet, setIsDialogueSet] = useState<boolean>(false);
  const [isActivityDone, setActivityDone] = useState<boolean>(false); // to hide/show activity and make dialogue/background changes 
  const [areColoursMixed, setColoursMixed] = useState<boolean>(false);
  


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
    setDialogue({...dialogue, name: newDialougeData.name, message: newDialougeData.message});
    incrementCount();
  }

  // Post-activity dialogue 
  const setUpDialogue = () => {
    addDialogue({name: "Picasso", message: "The fresh air is so calming and relaxing…"});
    addDialogue({name: "Caramel", message: "Seems like we’re in a grassland. Blue and yellow are two primary colours, and…"});
    addDialogue({name: "Picasso", message: "They make green, a secondary colour. Right?"});
    addDialogue({name: "Caramel", message: "Exactly!"});
  }



  const mixColours = () => {
    setColoursMixed(true)
  }

  const markActivityDone = () => {
    setActivityDone(true);
  }

  return (
    <MainLayout>
      <main className="grass-container">
      {!isActivityDone ?
        <>
          <MixingBox />
          <div className="colour-mix-area" onClick={mixColours}>

          {!areColoursMixed ? 
            <div className="mixing-box grid grid-cols-2 gap-16 grid-rows-1">
              <div className="button-1 col-span-1">
                <YellowColourButton />
              </div>

              <div className="button-2 col-span-1">
                <BlueColourButton />
              </div>
            </div> :
            <div className="mixing-box">
              <div className="mixed-colours">
                <div className="button-2">
                  <GreenColourButton onclick={markActivityDone}/>
                </div>
              </div>
            </div>
          }
          </div>
        </>
          : 
          <div className='lava-background'>
            <img src={require('../../images/backgrounds/bg_1.3.2.png')}></img>
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
