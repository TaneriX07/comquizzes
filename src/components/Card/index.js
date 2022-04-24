import React, { useState } from 'react'

import './Card.css'

const quizzes = [
  {
    question: 'What is my name?',
    options: ['Vincent', 'Eric', 'Ema', 'Vera'],
    answer: 'Vincent',
  },
  {
    question: 'How old am I?',
    options: [22, 23, 24, 25],
    answer: 23,
  },
]

const StartCard = ({ parentCallback }) => {
  const handleClick = () => {
    parentCallback(true)
  }

  return (
    <main>
      <div className="cardContainer">
        <div className="time">00:00:50</div>
        <div className="head">Quiz Challenge</div>
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
    </main>
  )
}

const Card = () => {
  const [quizStart, setQuizStart] = useState(false)

  const handleCallback = (data) => {
    setQuizStart(data)
  }

  return !quizStart ? (
    <StartCard parentCallback={handleCallback} />
  ) : (
    <div>Hello</div>
  )
}

export default Card
