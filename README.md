# Ice-Breaker Game 🎮

An interactive **Hot Seat** ice-breaker game built with React and Vite. Perfect for parties, team-building events, or getting to know new people!

## Overview

In the Ice-Breaker Game, players take turns answering fun, thought-provoking questions within a 30-second time limit. Each correct answer earns points, and all scores are tracked on a leaderboard. The game supports multiple languages and provides an engaging way to help people connect.

## Features

✨ **Core Gameplay**
- **Hot Seat Format**: Players answer rapid-fire questions with left/right choices
- **Timer**: 30-second countdown for each round
- **Scoring System**: Earn points for each correct answer
- **Shuffled Questions**: Questions are randomized for each game session
- **Leaderboard**: Track high scores and player performances

🌍 **Multi-Language Support**
- English and German translations included
- Easy language toggle during gameplay
- Language preference persisted in browser storage

🎨 **User Interface**
- Home screen with player name entry
- Dynamic game screen with visual timer
- Results screen with final scores
- Persistent leaderboard view

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Ice-Breaker-Game
```

2. Install dependencies:
```bash
npm install
```

### Running the Project

**Development Server:**
```bash
npm run dev
```
The game will be available at `http://localhost:5173` (or the port shown in your terminal)

**Build for Production:**
```bash
npm build
```

**Preview Production Build:**
```bash
npm run preview
```

## How to Play

1. **Enter Your Name**: Start by entering your player name on the home screen
2. **Answer Questions**: For each question, choose between the left or right option within 30 seconds
3. **Earn Points**: Each correct answer contributes to your score
4. **View Results**: After all questions, see your final score and ranking
5. **Check Leaderboard**: View high scores from previous games

## Project Structure

```
ice-breaker-game/
├── src/
│   ├── components/
│   │   ├── GameScreen.jsx       # Main game interface
│   │   ├── HomeScreen.jsx       # Player entry screen
│   │   ├── LanguageToggle.jsx   # Language switcher
│   │   ├── Leaderboard.jsx      # Leaderboard display
│   │   ├── LeaderboardView.jsx  # Leaderboard view wrapper
│   │   └── ResultsScreen.jsx    # Score results screen
│   ├── utils/
│   │   └── leaderboard.js       # Score tracking and storage
│   ├── App.jsx                  # Main application component
│   ├── main.jsx                 # React entry point
│   ├── questions.js             # Question database (EN & DE)
│   ├── translations.js          # Language translations
│   └── styles.css               # Global styles
├── package.json                 # Project dependencies
├── vite.config.js               # Vite configuration
└── README.md                    # This file
```

## Technologies Used

- **React 18**: User interface framework
- **Vite**: Fast build tool and development server
- **JavaScript (ES6+)**: Core language
- **LocalStorage**: Client-side data persistence
- **CSS3**: Styling and animations

## Configuration

- **Game Timer**: 30 seconds per question (configurable in `GameScreen.jsx`)
- **Languages**: Currently supports English (en) and German (de)
- **Questions**: Available in both English and German in `src/questions.js`

## Adding New Features

### Add Questions
Edit `src/questions.js` to add new questions in your desired language format.

### Add Languages
1. Update `src/translations.js` with new language strings
2. Add questions for the new language in `src/questions.js`
3. Update `LanguageToggle.jsx` to include the new language option

### Customize Timer
Modify the timer duration in `GameScreen.jsx` (default: 30 seconds)

## Browser Compatibility

Works on all modern browsers that support:
- ES6+ JavaScript
- LocalStorage API
- React 18

## Author

Created as an interactive ice-breaker tool for parties and team-building events.

---

**Have fun breaking the ice! 🎉**