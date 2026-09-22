# Typing Speed Test App Using Vanilla JS

This is a responsive typing speed test app where users can test their typing speed and accuracy.

## Overview

### The Challenge
Users should be able to:
- Start a typing test and see live WPM and accuracy
- Choose between Timed and Passage modes
- Choose difficulty level (Easy, Medium, Hard)
- See highlighted correct / incorrect characters in real-time
- View final results with WPM, accuracy, and time
- Save personal best score

### Links
- Live Site URL: https://typing-speed-test-5cm9.onrender.com
- Solution URL: https://www.frontendmentor.io/solutions/typing-speed-test-app-using-vanilla-js-FoP81oVZCf

## Features

- Live WPM and Accuracy tracking
- Timed Mode (60s) and Passage Mode
- Difficulty selection
- Character-by-character highlighting
- Personal best saved in localStorage
- Confetti celebration on new record
- Fully responsive (mobile dropdowns / desktop pills)
- Restart functionality

## Built With

- Semantic HTML5
- CSS3 (Flexbox, Custom Properties, Media Queries)
- Vanilla JavaScript (No frameworks)
- Canvas Confetti for celebrations

## What I Learned

- How to calculate WPM using `(correctChars / 5) / minutes`
- Managing game state between start, typing, and results
- Handling `setInterval` timer and clearing it correctly
- Syncing desktop pill buttons and mobile select inputs
- Hiding/showing elements using `style.display`

## Author

- Frontend Mentor - https://www.frontendmentor.io/profile/adeosunsamiat02-tech
- GitHub - https://github.com/adeosunsamiat02-tech
