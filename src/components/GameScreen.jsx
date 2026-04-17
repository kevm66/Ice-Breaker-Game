import { useState, useEffect, useRef } from 'react'

function GameScreen({ playerName, questions, onGameEnd, t }) {
  const [timeLeft, setTimeLeft] = useState(30)
  const [score, setScore] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [shuffledQuestions, setShuffledQuestions] = useState([])
  const [selectedChoice, setSelectedChoice] = useState(null)
  const timerRef = useRef(null)
  const choiceLeftRef = useRef(null)

  // Shuffle questions on mount
  useEffect(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5)
    setShuffledQuestions(shuffled)

    // Focus on first choice
    setTimeout(() => {
      if (choiceLeftRef.current) {
        choiceLeftRef.current.focus()
      }
    }, 100)
  }, [questions])

  // Timer countdown
  useEffect(() => {
    if (shuffledQuestions.length === 0) return

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current)
          onGameEnd(score)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [shuffledQuestions, score, onGameEnd])

  const currentQuestion = shuffledQuestions[currentQuestionIndex]

  const handleChoice = (choice) => {
    setSelectedChoice(choice)
    setScore(prev => prev + 1)

    setTimeout(() => {
      setSelectedChoice(null)
      setCurrentQuestionIndex(prev => {
        const nextIndex = prev + 1
        return nextIndex >= shuffledQuestions.length ? 0 : nextIndex
      })
    }, 300)
  }

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(prev => {
      const nextIndex = prev + 1
      return nextIndex >= shuffledQuestions.length ? 0 : nextIndex
    })
  }

  if (!currentQuestion) return null

  return (
    <>
      <div className="game-controls" aria-live="polite">
        <div className="player-info">
          <span className="player-label">{t('player')}</span>
          <span className="player-name" aria-label="Current player">{playerName}</span>
        </div>
        <div className="timer" role="timer" aria-live="assertive" aria-atomic="true">
          <div className="timer-display">
            <span aria-label="Time remaining">{timeLeft}</span>
            <span className="timer-label">{t('seconds')}</span>
          </div>
        </div>
        <div className="score" aria-live="polite" aria-atomic="true">
          <span className="score-label">{t('answers')}</span>
          <span aria-label="Number of answers">{score}</span>
        </div>
      </div>

      <div className="question-card" role="region" aria-label="Question choices">
        <div className="question-content" role="group" aria-label="Choose your answer">
          <button
            ref={choiceLeftRef}
            className={`question-box left clickable ${selectedChoice === 'left' ? 'selected' : ''}`}
            onClick={() => handleChoice('left')}
            role="button"
            aria-pressed={selectedChoice === 'left'}
            tabIndex="0"
          >
            <span className="question-text">{currentQuestion.left}</span>
            <span className="selected-indicator" aria-hidden="true">
              {t('selected')}
            </span>
          </button>
          <div className="divider" aria-hidden="true">{t('or')}</div>
          <button
            className={`question-box right clickable ${selectedChoice === 'right' ? 'selected' : ''}`}
            onClick={() => handleChoice('right')}
            role="button"
            aria-pressed={selectedChoice === 'right'}
            tabIndex="0"
          >
            <span className="question-text">{currentQuestion.right}</span>
            <span className="selected-indicator" aria-hidden="true">
              {t('selected')}
            </span>
          </button>
        </div>
        <button
          className="btn btn-next"
          onClick={handleNextQuestion}
          aria-label="Skip to next question"
        >
          {t('nextQuestion')}
        </button>
      </div>
    </>
  )
}

export default GameScreen
