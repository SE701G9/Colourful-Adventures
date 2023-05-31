import MainLayout from '../layouts/MainLayout';
import DialogueMenu from '../dialogue/DialogueMenu';
import './FindPrimary.css';
import '../dialogue/DialogueBox.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FindPrimary = () => {
  type DialogueData = {
    name: string;
    message: string;
  };

  const navigate = useNavigate();
  const [dialogue, setDialogue] = useState({
    name: 'Narrator',
    message: 'Help the parrot regain his memory!',
  });
  const [dialogueArray, setDialogueArray] = useState<
    { name: string; message: string }[]
  >([
    {
      name: 'Narrator',
      message: 'Find the items: Red Worms, Yellow Keys, and Blue Blanket',
    },
  ]);
  const [count, setCount] = useState(0);
  const [isDialogueSet, setIsDialogueSet] = useState<boolean>(false);

  const [shouldRedirect, setShouldRedirect] = useState(false);
  useEffect(() => {
    console.log(count);
  }, [count]);

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
      navigate('/modules/1/remembering-2');
    }
  };

  /* Use this method to setup the whole dialogue for a page*/
  const setUpDialogue = () => {
    addDialogue({
      name: 'Narrator',
      message: 'Now, click on the red worms!',
    });
  };

  const [arewWormsVisible, hideWorms] = useState(true);
  const [areKeysVisible, hideKeys] = useState(true);
  const [isBlanketVisible, hideBlanket] = useState(true);
  const [isPicassoNGVisible, hidePicassoNG] = useState(true);
  const [isPicassoHRVisible, hidePicassoHR] = useState(true);
  const [isPicassoCBRVisible, hidePicassoC] = useState(true);

  const handleWorm = () => {
    addDialogue({
      name: 'Caramel',
      message: 'Red worms! The way they wiggle is so fresh and tasty!',
    });
    addDialogue({
      name: '???',
      message: 'That’s right! It’s my favourite snack~',
    });
    addDialogue({
      name: 'Narrator',
      message: 'You helped the parrot regain his red feathers!',
    });
    addDialogue({
      name: 'Narrator',
      message: 'Next, the blue blanket!',
    });
    hideWorms(false);
    hidePicassoNG(false);
  };

  const handleKey = () => {
    addDialogue({ 
      name: 'Caramel', 
      message: 'Ooh, some shiny yellow keys~' });
    addDialogue({
      name: '???',
      message: 'Are these the keys to my home…?',
    });
    addDialogue({
      name: 'Narrator',
      message: 'The parrot has regained all his colors!',
    });
    hideKeys(false);
    hidePicassoC(false);
  };

  const handleBlanket = () => {
    addDialogue({
      name: '???',
      message: 'My blue blanket! Why did I bring my blanket here…',
    });
    addDialogue({
      name: 'Narrator',
      message: 'Once agian, you helped the parrot reagin his color!',
    });
    addDialogue({
      name: 'Narrator',
      message: 'Finally, the yellow keys!',
    });
    hideBlanket(false);
    hidePicassoHR(false);
  };

  const itemWorms = new URL(
    '/src/images/item-images/red_worms.png',
    import.meta.url
  );
  const itemKeys = new URL(
    '/src/images/item-images/yellow_keys.png',
    import.meta.url
  );
  const itemBlanket = new URL(
    '/src/images/item-images/blue_blanket.png',
    import.meta.url
  );
  const picassoNeutralGray = new URL(
    '/src/images/character-images/picasso/Picasso-Neutral-Gray.png',
    import.meta.url
  )
  const picassoHeartRed = new URL(
    '/src/images/character-images/picasso/Picasso-Heart-Red.png',
    import.meta.url
  )
  const picassoConfusedBlueRed = new URL(
    '/src/images/character-images/picasso/Picasso-Confused-BlueRed.png',
    import.meta.url
  )
  const picassoConfused = new URL(
    '/src/images/character-images/picasso/Picasso-Confused.png',
    import.meta.url
  )
  const caramelNeutral = new URL(
    '/src/images/character-images/caramel/Caramel-Neutral.png',
    import.meta.url
  )


  return (
    <MainLayout>
      <div className="bg">
        <main className="find-primary-container">
          <DialogueMenu
            name={dialogue.name}
            message={dialogue.message}
            onclick={changeDialogueData}
          />
          {arewWormsVisible && (
            <button className="redWorm" onClick={handleWorm}>
              <img src={String(itemWorms)} />
            </button>
          )}
          {areKeysVisible && (
            <button className="yellowKeys" onClick={handleKey}>
              <img src={String(itemKeys)} />
            </button>
          )}
          {isBlanketVisible && (
            <button className="blueBlanket" onClick={handleBlanket}>
              <img src={String(itemBlanket)} />
            </button>
          )}
          <div className='caramel'>
              <img src={String(caramelNeutral)}/>
          </div>
          <div className="picassoRed">
            {isPicassoHRVisible &&
              <img src={String(picassoHeartRed)}/>
            }
          </div>
          <div className="picassoGray">
            {isPicassoNGVisible &&
              <img src={String(picassoNeutralGray)}/>
            }
          </div>
          <div className="picassoBlue">
            {isPicassoCBRVisible &&
              <img src={String(picassoConfusedBlueRed)}/>
            }
          </div>
          <div className="picassoYellow">
            <img src={String(picassoConfused)}/>
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default FindPrimary;
