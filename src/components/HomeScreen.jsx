import { useState } from 'react'

function HomeScreen({ onStartGame, onViewLeaderboard, t }) {
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedName = name.trim()
    if (!trimmedName) {
      alert(t('enterName'))
      return
    }
    onStartGame(trimmedName)
  }

  return (
    <>
      <header>
        <h1 className="title">
          {t('title')} <span role="img" aria-label="ice cube">🧊</span>
        </h1>
        <h2 className="main-title">
          {t('mainTitle')} <span className="fire" role="img" aria-label="fire">🔥</span>
        </h2>
        <ul className="subtitle-list">
          <li>{t('rule1')}</li>
          <li>{t('rule2')}</li>
          <li>{t('rule3')}</li>
        </ul>
      </header>

      <div className="name-input">
        <form onSubmit={handleSubmit}>
          <label htmlFor="playerName" className="input-label">
            {t('enterName')}
          </label>
          <input
            type="text"
            id="playerName"
            className="text-input"
            placeholder={t('namePlaceholder')}
            maxLength="20"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-required="true"
          />
          <p className="timer-info">{t('timerInfo')}</p>
          <button
            type="submit"
            className="btn btn-start"
            aria-label="Start game with 30 second timer"
          >
            {t('startGame')}
          </button>
        </form>
        <button
          className="btn btn-secondary"
          onClick={onViewLeaderboard}
          aria-label="View leaderboard of all players"
        >
          {t('viewLeaderboard')}
        </button>
      </div>
    </>
  )
}

export default HomeScreen
