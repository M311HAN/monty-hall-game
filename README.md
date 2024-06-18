# Monty Hall Problem Game

Check out the live demo [here](https://M311HAN.github.io/monty-hall-game/).

![Monty Hall Problem](public/Monty-Hall.png)

A simple React app to simulate the Monty Hall problem game.

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [License](#license)
- [Create React App Info](#create-react-app-info)

## Description
This project simulates the Monty Hall problem, a famous probability puzzle. Players choose one of three doors, behind one of which is a prize. After selecting a door, one of the remaining doors with no prize is revealed, and the player gets a chance to switch their choice to the other unopened door. This project helps to visualize the probabilities involved in the problem.

## Features
- Interactive simulation of the Monty Hall problem.
- Allows players to select a door, reveal a non-winning door, and choose to stick or switch.
- Displays results and allows resetting the game.

## Technologies Used
- React
- CSS

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/M311HAN/monty-hall-game.git
    cd monty-hall-game
    ```
2. Install dependencies:
    ```bash
    npm install
    ```

## Usage
1. Start the application:
    ```bash
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000`.

## Components
### App Component
The main component for the Monty Hall problem game.
#### Methods:
- `generateWinningDoor()`: Generates a random number between 0 and 2 to determine the winning door.
- `resetGame()`: Resets the game by reinitializing all state variables.
- `handleDoorClick(door)`: Handles the click event on a door.
- `revealLosingDoor(selectedDoor, winningDoor)`: Reveals a losing door that is neither the selected door nor the winning door.

### Door Component
Represents a door in the Monty Hall problem game.
#### Props:
- `doorNumber`: Number representing this door (0, 1, or 2).
- `isSelected`: Boolean indicating if this door is the initially selected door.
- `isRevealed`: Boolean indicating if this door has been revealed by the program.
- `isFinalChoice`: Boolean indicating if this door is the final choice of the user.
- `isWinningDoor`: Boolean indicating if this door is the winning door.
- `handleClick`: Function to handle the click event on the door.

## License
This project is licensed under the MIT License and created by Melihhan (https://github.com/M311HAN). [Visit the repository](https://github.com/M311HAN?tab=repositories) for more projects and further collaboration.

## Create React App Info
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
