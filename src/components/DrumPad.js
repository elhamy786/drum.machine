import React from 'react';

const DrumPad = ({ id, keyTrigger, url, description, onClick }) => {
  const handleClick = () => {
    const audioElement = document.getElementById(keyTrigger);
    if (audioElement instanceof HTMLAudioElement) {
      audioElement.pause(); // Ensure the sound is stopped before trying to play it again
      audioElement.currentTime = 0; // Rewind to the start
      audioElement.play().catch(error => {
        console.error("Failed to play sound:", error);
      });
      onClick(description);
    } else {
      console.error(`Element with id ${keyTrigger} is not an HTMLAudioElement.`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key.toUpperCase() === keyTrigger) {
      handleClick();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [keyTrigger]);

  return (
    <div className="drum-pad" id={`pad-${keyTrigger}`} onClick={handleClick}>
      <audio className="clip" id={keyTrigger} src={url}></audio>
      {keyTrigger}
    </div>
  );
};

export default DrumPad;
