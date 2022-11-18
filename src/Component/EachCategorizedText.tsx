import React from 'react';

interface IProps {
    text: string;
    answer: number;
    open: boolean;
    handleOPening: ( index: number, open: boolean) => void;
    handleAnswer: (index: number, answer: number ) => void; 
    index: number;
}

export default function EachCategorizedText( { text, answer, open, handleOPening, handleAnswer, index}:IProps) {

  return (
    <span className='review-text-card'>
  {
    open ?
    <div className='category-selection-card'>
    <div className='category-card' onClick={() => handleAnswer(index, 1)}> UNDERSTOOD</div>
    <div className='category-card' onClick={() => handleAnswer(index, 2)}> SOMEWHAT UNDERSTOOD</div>
    <div className='category-card' onClick={() => handleAnswer(index, 3)}> NOT CLEAR</div>
    <div className='category-card' onClick={() => handleAnswer(index, 4)}> WHAT RUBBISH</div>
</div>
    :
    <></>
  }
    <p onClick={() => {handleOPening(index, !open)}} className='text' >{text}</p>
</span>
  )
}
