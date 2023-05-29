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



const OnAnswerClicked = () => {
    alert("Correct")
    
};

const ChoiceBox = ({ answer1, answer2, answer3  }: ChoiceProps) => (
    <ul className='choicebox'>
        <li><button className='choicebutton' onClick={OnAnswerClicked}>{answer1}</button></li>
        <li><button className='choicebutton' onClick={OnAnswerClicked}>{answer2}</button></li>
        <li><button className='choicebutton' onClick={OnAnswerClicked}>{answer3}</button></li>
    </ul>
);


    export default ChoiceBox
