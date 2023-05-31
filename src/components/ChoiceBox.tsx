import React from 'react';
import './ChoiceBox.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type ChoiceProps = {
  answer1: String;
  answer2: String;
  answer3: String;
  answer1correct: boolean;
  answer2correct: boolean;
  answer3correct: boolean;
};



function OnAnswerClicked() {
    const a: boolean = true;
    if (a) {
        alert("Correct")
    } else {
        alert("Incorrect")
    }
};

const ChoiceBox = ({ answer1, answer2, answer3, answer1correct, answer2correct, answer3correct }: ChoiceProps) => (
    <ul className='choicebox'>
        <li><button className='choicebutton' onClick={OnAnswerClicked}>{answer1}</button></li>
        <li><button className='choicebutton' onClick={OnAnswerClicked}>{answer2}</button></li>
        <li><button className='choicebutton' onClick={OnAnswerClicked}>{answer3}</button></li>
    </ul>
);


export default ChoiceBox
