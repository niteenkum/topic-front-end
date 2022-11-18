import "./component.scss";

interface IProps{
    buttonText: string;
    onPress: () => void;
}

export default function EButton( { buttonText, onPress } : IProps ) {


  return (
    <div className='e-button' onClick={onPress}>
    {/* <BsSearch className="icon"/> */}
    <span>{buttonText}</span>
    </div>
  )
}
