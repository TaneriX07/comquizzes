import React, { useState, useEffect } from 'react'
import './Card.css'
import fetchQuizzes from '../../helpers'

const StartCard = ({ changeMode }) => {
  const handleClick = () => {
    changeMode(true)
  }

  return (
    <div className="cardContainer">
      <div className="head">
        <h2>Quiz Challenge</h2>
      </div>
      <div className="body">
        <p>
          Your objective is to answer the following questions within the time
          limit.
        </p>
        <p>
          Please note that incorrect answer will result in 10 seconds penalty.
        </p>
      </div>
      <button className="btn" onClick={handleClick}>
        START
      </button>
    </div>
  )
}

const Card = () => {
  const [quizStart, setQuizStart] = useState(false)

  // Mode: StartCard or QuizCard
  const changeMode = (data) => {
    setQuizStart(data)
  }

  // Fetch quizzes
  useEffect(() => {
    fetchQuizzes()
  }, [])

  return (
    <main>
      <div className="time">00:00:50</div>
      {!quizStart ? <StartCard changeMode={changeMode} /> : <div>Hello</div>}
    </main>
  )
}

export default Card
