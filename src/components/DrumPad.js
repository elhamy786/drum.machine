import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

function DrumPad({
  keyTrigger,
  url,
  description,
  onClick,
}) {
  const handleClick = useCallback(() => {
    const audioElement = document.getElementById(keyTrigger);
    if (audioElement instanceof HTMLAudioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
      audioElement.play().catch(() => {
      });
      onClick(description);
    }
  }, [keyTrigger, description, onClick]);

  const handleKeyPress = useCallback(
    (e) => {
      if (e.key.toUpperCase() === keyTrigger) {
        handleClick();
      }
    },
    [keyTrigger, handleClick],
  );

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
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio
        className="clip"
        id={keyTrigger}
        src={url}
        aria-hidden="true"
      />
      {keyTrigger}
    </button>
  );
}

DrumPad.propTypes = {
  keyTrigger: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DrumPad;
