import MainLayout from '../layouts/MainLayout';
import DialogueMenu from '../dialogue/DialogueMenu';
import './FindPrimary.css';
import '../dialogue/DialogueBox.css';
import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const FindPrimary = () => {
  type DialogueData = {
    name: string;
    message: string;
  };

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
    setDialogue({
      ...dialogue,
      name: newDialougeData.name,
      message: newDialougeData.message,
    });
    incrementCount();
  };

  /* Use this method to setup the whole dialogue for a page*/
  const setUpDialogue = () => {};

  const [arewWormsVisible, hideWorms] = useState(true);
  const [areKeysVisible, hideKeys] = useState(true);
  const [isBlanketVisible, hideBlanket] = useState(true);

  const handleWorm = () => {
    addDialogue({
      name: 'Caramel',
      message: 'Red worms! The way they wiggle is so fresh and tasty!',
    });
    addDialogue({
      name: 'Picasso',
      message: 'That’s right! It’s my favourite snack~',
    });
    hideWorms(false);
  };

  const handleKey = () => {
    addDialogue({ name: 'Caramel', message: 'Ooh, some shiny yellow keys~' });
    addDialogue({
      name: 'Picasso',
      message: 'Are these the keys to my home…?',
    });
    hideKeys(false);
  };

  const handleBlanket = () => {
    addDialogue({
      name: 'Picasso',
      message: 'My blue blanket! Why did I bring my blanket here…',
    });
    hideBlanket(false);
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
        </main>
      </div>
    </MainLayout>
  );
};

export default FindPrimary;
