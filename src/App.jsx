import { useState, useEffect } from 'react'
import LanguageToggle from './components/LanguageToggle'
import HomeScreen from './components/HomeScreen'
import GameScreen from './components/GameScreen'
import ResultsScreen from './components/ResultsScreen'
import LeaderboardView from './components/LeaderboardView'
import { translations } from './translations'
import { questions } from './questions'
import { seedLeaderboardWithTestData, saveToLeaderboard, loadLeaderboard } from './utils/leaderboard'

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en')
  const [gameState, setGameState] = useState('home') // 'home', 'playing', 'results', 'leaderboard'
  const [playerName, setPlayerName] = useState('')
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(30)

  // Load language preference on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('hotSeatLanguage')
    if (savedLang) {
      setCurrentLanguage(savedLang)
    }
    // Seed test data
    seedLeaderboardWithTestData()
  }, [])

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'en' ? 'de' : 'en'
    setCurrentLanguage(newLang)
    localStorage.setItem('hotSeatLanguage', newLang)
  }

  const t = (key) => translations[currentLanguage][key] || key

  const startGame = (name) => {
    setPlayerName(name)
    setScore(0)
    setTimeLeft(30)
    setGameState('playing')
  }

  const endGame = (finalScore) => {
    setScore(finalScore)
    saveToLeaderboard(playerName, finalScore)
    setGameState('results')
  }

  const viewLeaderboard = () => {
    setGameState('leaderboard')
  }

  const backToHome = () => {
    setGameState('home')
  }

  const playAgain = () => {
    setGameState('home')
  }

  return (
    <div className="app-container">
      <div className="container" role="main">
        <LanguageToggle
          currentLanguage={currentLanguage}
          onToggle={toggleLanguage}
          t={t}
        />

        {gameState === 'home' && (
          <HomeScreen
            onStartGame={startGame}
            onViewLeaderboard={viewLeaderboard}
            t={t}
          />
        )}

        {gameState === 'playing' && (
          <GameScreen
            playerName={playerName}
            questions={questions[currentLanguage]}
            onGameEnd={endGame}
            t={t}
          />
        )}

        {gameState === 'results' && (
          <ResultsScreen
            playerName={playerName}
            score={score}
            onPlayAgain={playAgain}
            t={t}
            currentLanguage={currentLanguage}
          />
        )}

        {gameState === 'leaderboard' && (
          <LeaderboardView
            onBackToHome={backToHome}
            t={t}
            currentLanguage={currentLanguage}
          />
        )}

        {/* Screen reader announcements */}
        <div id="srAnnouncements" className="sr-only" role="status" aria-live="assertive" aria-atomic="true"></div>
      </div>
    </div>
  )
}

export default App
