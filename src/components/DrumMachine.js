import React, { useState } from 'react';
import DrumPad from './DrumPad';
import './DrumMachine.css';

const drumPads = [
  {
    id: 'Q',
    keyTrigger: 'Q',
    url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3',
    description: 'Heater 1',
  },
  {
    id: 'W',
    keyTrigger: 'W',
    url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3',
    description: 'Heater 2',
  },
  {
    id: 'E',
    keyTrigger: 'E',
    url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3',
    description: 'Heater 3',
  },
  {
    id: 'A',
    keyTrigger: 'A',
    url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3',
    description: 'Heater 4',
  },
  {
    id: 'S',
    keyTrigger: 'S',
    url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3',
    description: 'Clap',
  },
  {
    id: 'D',
    keyTrigger: 'D',
    url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3',
    description: 'Open HH',
  },
  {
    id: 'Z',
    keyTrigger: 'Z',
    url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3',
    description: 'Kick n Hat',
  },
  {
    id: 'X',
    keyTrigger: 'X',
    url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3',
    description: 'Kick',
  },
  {
    id: 'C',
    keyTrigger: 'C',
    url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3',
    description: 'Closed HH',
  },
];

const DrumMachine = () => {
  const [display, setDisplay] = useState('');

  const handlePadClick = (description) => {
    setDisplay(description);
  };

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <div className="drum-pads">
        {drumPads.map((pad) => (
          <DrumPad
            key={pad.keyTrigger}
            id={pad.id}
            keyTrigger={pad.keyTrigger}
            url={pad.url}
            description={pad.description}
            onClick={handlePadClick}
          />
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;
