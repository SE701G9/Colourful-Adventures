import MainLayout from '../layouts/MainLayout';
import MixingBox from '../ColourMixComponents/MixingBox';
import DialogueMenu from '../dialogue/DialogueMenu';
import BlueColourButton from '../ColourMixComponents/BlueColourButton';
import RedColourButton from '../ColourMixComponents/RedColourButton';
import './LakeColourMix.css';
import { PureComponent, useState } from 'react';
import PurpleColourButton from '../ColourMixComponents/PurpleColourButton';
import { useNavigate } from 'react-router-dom';

const LakeColourMix = () => {
  type DialogueData = {
    name: string;
    message: string;
  };

  const [dialogue, setDialogue] = useState({
    name: '',
    message:
      'Mix red and blue to see where Picasso and Caramel will be resting.',
  });
  const [dialogueArray, setDialogueArray] = useState<
    { name: string; message: string }[]
  >([]);
  const [count, setCount] = useState(0);
  const [isDialogueSet, setIsDialogueSet] = useState<boolean>(false);
  const [isActivityDone, setActivityDone] = useState<boolean>(false);
  const [areColoursMixed, setColoursMixed] = useState<boolean>(false);
  const navigate = useNavigate();

  const addDialogue = ({ name, message }: DialogueData) => {
    setDialogueArray((dialogueArray) => [...dialogueArray, { name, message }]);
  };

  const incrementCount = () => {
    setCount((count) => count + 1);
  };

  const changeDialogueData = () => {
    if (!isDialogueSet) {
      setUpDialogue();
      setIsDialogueSet(true);
    }
    const newDialougeData = dialogueArray[count];
    try {
      setDialogue({
        ...dialogue,
        name: newDialougeData.name,
        message: newDialougeData.message,
      });
      incrementCount();
    } catch (err) {
      if (isActivityDone) {
        navigate('/modules/1/land-4');
      }
    }
  };

  const setUpDialogue = () => {};

  const mixColours = () => {
    setColoursMixed(true);
  };

  const markActivityDone = () => {
    setActivityDone(true);
    setDialogue({
      name: 'Picasso',
      message: 'We got purple from mixing red and blue.',
    });
    addDialogue({ name: 'Caramel', message: 'A romantic night by the lake~' });
    addDialogue({
      name: 'Caramel',
      message:
        'The reflection of the sky on the lake made the water look purple, too! Isn’t that amazi-',
    });
    addDialogue({ name: 'Picasso', message: 'Zzzz… purple… zzz…' });
  };

  const [redColourActive, setRedColourActive] = useState<boolean>(true);
  const [blueColourActive, setBlueColourActive] = useState<boolean>(true);

  const redColourClicked = () => {
    setRedColourActive(false);
  }

  const blueColourClicked = () => {
    setBlueColourActive(false);
    mixColours();

  }

  return (
    <MainLayout>
      <main className="lake-container">
      {!isActivityDone ?
        <>
          <MixingBox />
          <div className="colour-mix-area">

          {!areColoursMixed ? 
            <div className="mixing-box">
              <div className="not-mixed-colours">
              {redColourActive ? 
                <div className="button-1" onClick={redColourClicked}>
                  <RedColourButton />
                </div>
                : <div className="button-1"> 
                  <button className="colour-button bg-[#961b1b]"></button>
                  </div>
                }

                { blueColourActive ?
                  <div className="button-2" onClick={blueColourClicked}>
                    <BlueColourButton/>
                  </div> :
                  <button className="colour-button bg-[#243057]"></button>
                }
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
          name={dialogue.name}
          message={dialogue.message}
          onclick={changeDialogueData}
        />
      </main>
    </MainLayout>
  );
};

export default LakeColourMix;
