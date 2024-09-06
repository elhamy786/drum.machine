import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const DrumPad = ({ keyTrigger, url, description, onClick }) => {
  const handleClick = () => {
    const audioElement = document.getElementById(keyTrigger);
    if (audioElement instanceof HTMLAudioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
      audioElement.play().catch(error => {

      });
      onClick(description);
    }
  };

  const handleKeyPress = useCallback((e) => {
    if (e.key.toUpperCase() === keyTrigger) {
      handleClick();
    }
  }, [keyTrigger]);

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
      tabIndex="0"
      aria-label={description}
      type="button"
    >
      <audio className="clip" id={keyTrigger} src={url} />
      {/* Captions are not typically used for audio-only elements like this drum pad */}
      {keyTrigger}
    </button>
  );
};

DrumPad.propTypes = {
  keyTrigger: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DrumPad;
