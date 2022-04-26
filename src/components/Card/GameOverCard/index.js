import React from 'react'
import './GameOverCard.css'

const GameOverCard = ({
  highScore,
  score,
  onGameOver,
  onUpdateSec,
  onChangeMode,
}) => {
  const handleClick = () => {
    onChangeMode(true)
    onUpdateSec(60)
    onGameOver(false)
  }

  return (
    <div className="cardContainer">
      <h2>Game Over</h2>
      {score >= highScore ? (
        <div className="game-over-message">
          <p>Score: {score}</p>
          <p>Congratulations! You've set a new highscore.</p>
        </div>
      ) : (
        <div className="game-over-message">
          <p>Score: {score}</p>
          <p>
            Too bad! You're {highScore - score + 1}{' '}
            {highScore - score + 1 <= 1 ? 'score' : 'scores'} away from setting
            a highscore.
          </p>
        </div>
      )}
      <button className="btn" onClick={handleClick}>
        TRY AGAIN
      </button>
    </div>
  )
}

export default GameOverCard
