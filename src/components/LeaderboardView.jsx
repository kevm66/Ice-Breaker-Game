import Leaderboard from './Leaderboard'

function LeaderboardView({ onBackToHome, t, currentLanguage }) {
  return (
    <div className="leaderboard-view" role="region" aria-label="Leaderboard">
      <h2 className="results-title">
        <span role="img" aria-label="trophy">🏆</span> {t('leaderboard')}
      </h2>

      <Leaderboard
        t={t}
        currentLanguage={currentLanguage}
        showClearButton={true}
      />

      <button
        className="btn btn-start"
        onClick={onBackToHome}
        aria-label="Return to home screen"
      >
        {t('backToHome')}
      </button>
    </div>
  )
}

export default LeaderboardView
