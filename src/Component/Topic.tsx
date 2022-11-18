import React from 'react'

interface IProps{
    text: string;
    percentage: string;
}

export default function Topic( {text, percentage}: IProps) {
  return (
    <div className='topic'>
        <div className='topic-name'>{text}</div>
        <div className='topic-percentage'>{percentage + "%"}</div>
    </div>
    
  )
}
