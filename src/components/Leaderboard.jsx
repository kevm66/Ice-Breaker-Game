import { useState, useEffect } from 'react'
import { loadLeaderboard, clearLeaderboard as clearLeaderboardData } from '../utils/leaderboard'

function Leaderboard({ currentScore, currentPlayerName, t, currentLanguage, showClearButton = true }) {
  const [leaderboard, setLeaderboard] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    const data = loadLeaderboard()
    // Sort by score (highest first), then by timestamp (earliest first)
    data.sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score
      }
      return new Date(a.timestamp) - new Date(b.timestamp)
    })
    setLeaderboard(data)
  }

  const handleClear = () => {
    if (confirm('Are you sure you want to clear all leaderboard data? This cannot be undone.')) {
      clearLeaderboardData()
      loadData()
    }
  }

  return (
    <div className="leaderboard">
      <h3 className="leaderboard-title">
        <span role="img" aria-label="trophy">🏆</span> {t('leaderboard')}
      </h3>
      <div className="leaderboard-list" role="list" aria-label="Player scores">
        {leaderboard.length === 0 ? (
          <div className="leaderboard-empty">No scores yet. Be the first!</div>
        ) : (
          leaderboard.map((entry, index) => {
            const isCurrentGame = currentScore !== undefined &&
                                  entry.score === currentScore &&
                                  entry.name === currentPlayerName &&
                                  entry.timestamp === leaderboard[leaderboard.length - 1].timestamp

            return (
              <div
                key={`${entry.name}-${entry.timestamp}`}
                className={`leaderboard-item ${isCurrentGame ? 'current' : ''}`}
                role="listitem"
                aria-label={`Rank ${index + 1}, ${entry.name}, ${entry.score} points${isCurrentGame ? ', your current score' : ''}`}
              >
                <span className="leaderboard-rank" aria-hidden="true">#{index + 1}</span>
                <span className="leaderboard-name" aria-hidden="true">{entry.name}</span>
                <span className="leaderboard-score" aria-hidden="true">{entry.score}</span>
                {isCurrentGame && (
                  <span className="your-score-indicator">{t('yourScore')}</span>
                )}
              </div>
            )
          })
        )}
      </div>
      {showClearButton && (
        <button
          className="btn btn-clear"
          onClick={handleClear}
          aria-label="Permanently clear all leaderboard data"
        >
          {t('clearLeaderboard')}
        </button>
      )}
    </div>
  )
}

export default Leaderboard
