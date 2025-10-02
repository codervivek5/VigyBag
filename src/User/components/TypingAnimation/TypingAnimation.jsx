import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ 
  text, 
  speed = 100, 
  showCursor = true, 
  cursorBlinkSpeed = 530,
  className = "",
  onComplete = null,
  highlightText = null,
  highlightClass = "text-green-700"
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursorState, setShowCursorState] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  // Typing effect
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      if (onComplete) {
        onComplete();
      }
    }
  }, [currentIndex, text, speed, onComplete, isComplete]);

  // Cursor blinking effect
  useEffect(() => {
    if (showCursor) {
      const blinkInterval = setInterval(() => {
        setShowCursorState(prev => !prev);
      }, cursorBlinkSpeed);

      return () => clearInterval(blinkInterval);
    }
  }, [showCursor, cursorBlinkSpeed]);

  // Function to render text with highlighting
  const renderTextWithHighlight = () => {
    if (!highlightText || !displayText.includes(highlightText)) {
      return displayText;
    }

    const parts = displayText.split(highlightText);
    const result = [];
    
    for (let i = 0; i < parts.length; i++) {
      if (i > 0) {
        result.push(
          <span key={`highlight-${i}`} className={highlightClass}>
            {highlightText}
          </span>
        );
      }
      if (parts[i]) {
        result.push(
          <span key={`text-${i}`}>
            {parts[i]}
          </span>
        );
      }
    }
    
    return result;
  };

  return (
    <span className={className}>
      {renderTextWithHighlight()}
      {showCursor && (
        <span 
          className={`inline-block w-0.5 h-[1em] bg-current ml-1 ${
            showCursorState ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-100`}
          aria-hidden="true"
        >
          |
        </span>
      )}
    </span>
  );
};

export default TypingAnimation;
