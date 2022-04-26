import React from 'react'

import './Header.css'

const Header = ({ highScore }) => {
  return (
    <header>
      <div className="logo">
        <a href=".">COM Quizzes</a>
      </div>
      <div className="highscores">
        <span>Highscore: {highScore}</span>
      </div>
    </header>
  )
}

export default Header
