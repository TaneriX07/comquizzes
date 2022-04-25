import React, { useState, useEffect } from 'react'
import './Card.css'

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
  const [quizzes, setQuizzes] = useState([])

  // Mode: StartCard or QuizCard
  const changeMode = (data) => {
    setQuizStart(data)
  }

  useEffect(() => {
    // Fetch quizzes
    const fetchQuizzes = async () => {
      try {
        const response = await fetch(
          'https://opentdb.com/api.php?amount=20&category=18&type=multiple'
        )
        const data = await response.json()
        setQuizzes(data.results)
      } catch (error) {
        console.log(error)
      }
    }

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
