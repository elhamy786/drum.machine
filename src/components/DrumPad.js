import React from 'react';
import PropTypes from 'prop-types';

const DrumPad = ({ keyTrigger, url, description, onClick }) => {
  const handleClick = () => {
    const audioElement = document.getElementById(keyTrigger);
    if (audioElement instanceof HTMLAudioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
      audioElement.play().catch(error => {
        console.error('Failed to play sound:', error);
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
  }, [handleKeyPress]);

  return (
    <button
      className="drum-pad"
      id={`pad-${keyTrigger}`}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex="0"
      aria-label={description}
    >
      <audio className="clip" id={keyTrigger} src={url} />
      {keyTrigger}
    </button>
  );
};

DrumPad.propTypes = {
  keyTrigger: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default DrumPad;
