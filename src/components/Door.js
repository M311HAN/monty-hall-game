import React from 'react';
import './Door.css';

/**
 * Door Component
 * Represents a door in the Monty Hall problem game.
 * 
 * Props:
 * - doorNumber: Number representing this door (0, 1, or 2).
 * - isSelected: Boolean indicating if this door is the initially selected door.
 * - isRevealed: Boolean indicating if this door has been revealed by the program.
 * - isFinalChoice: Boolean indicating if this door is the final choice of the user.
 * - isWinningDoor: Boolean indicating if this door is the winning door.
 * - handleClick: Function to handle the click event on the door.
 */
const Door = ({ doorNumber, isSelected, isRevealed, isFinalChoice, isWinningDoor, handleClick }) => {
    /**
   * Renders the content inside the door based on its state.
   * - If the door is revealed or is the final choice, it shows an emoji (🎉 for win, 🐐 for lose).
   * - If the door is the final choice, it also displays a message ("You Win!" or "You Lose").
   * - If the door is selected but not revealed, it shows "Selected".
   * - Otherwise, it shows "Closed".
   */
    const renderContent = () => {
    if (isRevealed || isFinalChoice) {
      const emoji = isWinningDoor ? '🎉' : '🐐';
      const message = isFinalChoice ? (isWinningDoor ? 'You Win!' : 'You Lose!') : '';
      return (
        <div>
          <div>{emoji}</div>
          {message && <div className="message">{message}</div>}
        </div>
      );
    }
    return isSelected ? 'Selected' : 'Closed';
  };

  return (
    <div className={`door ${isRevealed || isFinalChoice ? 'open' : ''}`} onClick={handleClick}>
      <p>Door {doorNumber + 1}</p>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Door;

