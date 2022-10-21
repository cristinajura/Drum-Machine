import React, { useState } from 'react';
import './App.scss';

const activeDrumPad = {
    backgroundColor: "#ee2",
    boxShadow: "0px 3px 5px",
    height: 77,
    marginTop: 3
  };
  
  const inactiveDrumPad = {
    backgroundColor: "#787",
    boxShadow: "3px 3px 5px"
  };

const DrumPad = (props) => {
    const [drumPadStyle, setDrumPadStyle] = useState(inactiveDrumPad);
  
    const activateDrumPad = () => {
      if (props.power) {
        if (drumPadStyle.backgroundColor === "#ee2") {
            setDrumPadStyle(inactiveDrumPad)
        } else {
          setDrumPadStyle(activeDrumPad)
          setTimeout(() => resetInactiveDrumPad(), 100);
        }
      } else if (drumPadStyle.height === 77) {
        setDrumPadStyle(inactiveDrumPad)
      } else {
            setDrumPadStyle({
            height: 77,
            marginTop: 3,
            backgroundColor: "#787",
            boxShadow: "0 3px #787"
          })
        setTimeout(() => resetInactiveDrumPad(), 100);
      }
    }

    const resetInactiveDrumPad = () => {
      setDrumPadStyle(inactiveDrumPad)
    }
  
    const playSound = () => {
      const sound = document.getElementById(props.keyTrigger);
      sound.play();
      activateDrumPad();
      props.updateDisplay(props.clipId.replace(/-/g, " "));
    }
  
      return (
        <div
          className="drum-pad"
          id={props.clipId}
          onClick = {playSound}
          style={drumPadStyle}
        >
          <audio
            className="clip"
            id={props.keyTrigger}
            src={props.clip}
          />
          {props.keyTrigger}
        </div>
      ); 
  }

  export default DrumPad;