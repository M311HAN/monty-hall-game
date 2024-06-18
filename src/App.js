import React, { useState } from 'react';
import Door from './components/Door';
import './App.css';

/**
 * Generates a random number between 0 and 2 to determine the winning door.
 * @returns {number} The door number (0, 1, or 2) that is the winning door.
 */
const generateWinningDoor = () => Math.floor(Math.random() * 3);

/**
 * App Component
 * The main component for the Monty Hall problem game.
 */
const App = () => {
  // State to track the winning door, selected door, revealed door, and final choice.
  const [winningDoor, setWinningDoor] = useState(generateWinningDoor());
  const [selectedDoor, setSelectedDoor] = useState(null);
  const [revealedDoor, setRevealedDoor] = useState(null);
  const [finalChoice, setFinalChoice] = useState(null);

    /**
   * Resets the game by reinitializing all state variables.
   */
  const resetGame = () => {
    setWinningDoor(generateWinningDoor());
    setSelectedDoor(null);
    setRevealedDoor(null);
    setFinalChoice(null);
  };

    /**
   * Handles the click event on a door.
   * - If no door has been selected yet, set the clicked door as selected and reveal a losing door.
   * - If a door has been selected but not finalized, set the clicked door as the final choice.
   * @param {number} door - The door number that was clicked.
   */
  const handleDoorClick = (door) => {
    if (finalChoice !== null) return; // Ignore clicks after the final choice

      /**
   * Reveals a losing door that is neither the selected door nor the winning door.
   * @param {number} selectedDoor - The door number that was initially selected.
   * @param {number} winningDoor - The door number that is the winning door.
   * @returns {number} The door number that is revealed as a losing door.
   */
    if (selectedDoor === null) {
      setSelectedDoor(door);
      setRevealedDoor(revealLosingDoor(door, winningDoor));
    } else if (revealedDoor !== door) {
      setFinalChoice(door);
    }
  };

  const revealLosingDoor = (selectedDoor, winningDoor) => {
    const doors = [0, 1, 2];
    const losingDoors = doors.filter((door) => door !== selectedDoor && door !== winningDoor);
    return losingDoors[Math.floor(Math.random() * losingDoors.length)];
  };

  return (
    <div className="App">
      <h1>Monty Hall Problem</h1>
      <div className="doors">
        {[0, 1, 2].map((door) => (
          <Door
            key={door}
            doorNumber={door}
            isSelected={selectedDoor === door}
            isRevealed={revealedDoor === door}
            isFinalChoice={finalChoice === door}
            isWinningDoor={winningDoor === door}
            handleClick={() => handleDoorClick(door)}
          />
        ))}
      </div>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default App;



