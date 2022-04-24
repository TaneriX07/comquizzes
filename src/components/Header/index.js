import React from 'react'

import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="logo">
        <span>Quick Quizzes</span>
      </div>
      <div className="highscores">
        <span>View Highscores</span>
      </div>
    </header>
  )
}

export default Header
