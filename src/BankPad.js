import React from 'react';
import './App.scss';
import DrumPad from './DrumPad';

const BankPad = (props) => {
    let bankPad;
    if (props.power) {
      bankPad = props.currentBank.map((drumObj, i, Arr) => {
        return (
          <DrumPad
            clip={Arr[i].url}
            clipId={Arr[i].id}
            keyCode={Arr[i].keyCode}
            keyTrigger={Arr[i].keyTrigger}
            power={props.power}
            updateDisplay={props.updateDisplay}
          />
        );
      });
    } else {
      bankPad = props.currentBank.map((drumObj, i, Arr) => {
        return (
          <DrumPad
            clip="#"
            clipId={Arr[i].id}
            keyCode={Arr[i].keyCode}
            keyTrigger={Arr[i].keyTrigger}
            power={props.power}
            updateDisplay={props.updateDisplay}
          />
        );
      });
    }
    return <div className="drum-pad-container">{bankPad}</div>;
  };

  export default BankPad;