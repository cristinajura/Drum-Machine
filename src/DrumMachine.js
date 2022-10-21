import React, { useState } from 'react';
import './App.scss';
import BankPad from './BankPad';

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  }
];

const DrumMachine = () => {

  const [power, setPower] = useState(true);
  const [display, setDisplay] = useState(String.fromCharCode(160));
  const [currentBank, setCurrentBank] = useState(bankOne);
  const [currentBankId, setCurrentBankId] = useState("Heater Kit");
  const [volSlider, setVolSlider] = useState(0.3);

  const powerControl = () => {
    if (power) {
        setPower(false)
        setDisplay("Power Off")
      } else {
        setPower(true)
        setDisplay("Power ON")
        setTimeout(() => clearDisplay(), 1000);
      }
    }

  const displayClipName = (id) => {
    if (power) {
        setDisplay(id)
    }
  }

  const volumeControle = (e) => {
    if (power) {
        setVolSlider(e.target.value)
        setDisplay("Volume: " + Math.round(e.target.value * 100))
        setTimeout(() => clearDisplay(), 1000);
    }
  }

  const selectBank = () => {
    if (power) {
      if (currentBankId === "Heater Kit") {
          setDisplay("Smooth Piano Kit")
          setCurrentBank(bankTwo)
          setCurrentBankId("Smooth Piano Kit")
      } else {
          setDisplay("Heater Kit")
          setCurrentBank(bankOne)
          setCurrentBankId("Heater Kit")
      }
    }
  }

  const clearDisplay = () => {
      setDisplay(String.fromCharCode(160))
  }

    const powerSlider = power
      ? {
          float: "left"
        }
      : {
          float: "right",
          backgroundColor: "red"
        };

    const bankSlider =
      currentBank === bankOne
        ? {
            float: "left"
          }
        : {
            float: "right"
          };

    {
      const clips = [].slice.call(document.getElementsByClassName("clip"));
      clips.forEach((sound) => {
        sound.volume = volSlider;
      });
    }

    return (
      <div>
        <div className="drum-machine-container" id="drum-machine">
          <BankPad
            clipVolume={volSlider}
            currentBank={currentBank}
            power={power}
            updateDisplay={displayClipName}
          />

          <div className="controls-container">
            <p>Power</p>
            <div id="power" onClick={powerControl}>
              <div className="buttonSlider" style={powerSlider}></div>
            </div>

            <p id="display">{display}</p>

            <div id="volume">
              <input
                min="0"
                max="1"
                className="volumeControle"
                onChange={volumeControle}
                step="0.01"
                type="range"
                value={volSlider}
              />
            </div>

            <p>Bank</p>
            <div id="bank" onClick={selectBank}>
              <div className="buttonSlider" style={bankSlider}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default DrumMachine;
