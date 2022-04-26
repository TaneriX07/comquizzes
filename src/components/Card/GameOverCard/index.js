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
      <p className="game-over-message">Score: {score}</p>
      {score >= highScore ? (
        <p className="game-over-message">
          Congratulations! You've set a new highscore.
        </p>
      ) : (
        <p className="game-over-message">
          Too bad! You're {highScore - score + 1}{' '}
          {highScore - score + 1 <= 1 ? 'score' : 'scores'} away from setting a
          highscore.
        </p>
      )}
      <button className="btn" onClick={handleClick}>
        TRY AGAIN
      </button>
    </div>
  )
}

export default GameOverCard
