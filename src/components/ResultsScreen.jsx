import Leaderboard from './Leaderboard'

function ResultsScreen({ playerName, score, onPlayAgain, t, currentLanguage }) {
  return (
    <div className="results" role="region" aria-live="polite">
      <h2 className="results-title">{t('gameOver')}</h2>
      <p className="results-score">
        <span>{playerName}</span> {t('answered')} <span>{score}</span> {t('questions')}
      </p>

      <Leaderboard
        currentScore={score}
        currentPlayerName={playerName}
        t={t}
        currentLanguage={currentLanguage}
      />

      <button
        className="btn btn-start"
        onClick={onPlayAgain}
        aria-label="Start a new game"
      >
        {t('playAgain')}
      </button>
    </div>
  )
}

export default ResultsScreen
