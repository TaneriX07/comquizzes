import React, { useState, useEffect } from 'react'
import './Card.css'
import StartCard from './StartCard'
import QuizCard from './QuizCard'
import Time from './Time'

const Card = () => {
  const [quizStart, setQuizStart] = useState(false)
  const [quizzes, setQuizzes] = useState([])
  const [score, setScore] = useState(0)
  const [sec, setSec] = useState(50)
  const [isGameOver, setIsGameOver] = useState(false)

  // Mode: StartCard or QuizCard
  const handleChangeMode = (data) => {
    setQuizStart(data)
  }

  // This callback will be passed to QuizCard to update the score and the card
  const handleUpdateScore = (score) => {
    setScore(score + 1)
  }

  // Callback for the timer
  const handleUpdateSec = (sec) => {
    setSec(sec - 1)
  }

  const handleGameOver = (status) => {
    setIsGameOver(status)
  }

  // Fetch quizzes
  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await fetch(
          'https://opentdb.com/api.php?amount=50&category=18&type=multiple'
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
      <Time
        sec={sec}
        onUpdateSec={handleUpdateSec}
        onGameOver={handleGameOver}
      />
      {isGameOver ? <div>Game OVER</div> : null}
      {!quizStart && !isGameOver ? (
        <StartCard onChangeMode={handleChangeMode} />
      ) : null}
      {/* This prevent the QuizCard from being rendered when the data fetching is not yet done */}
      {quizStart && quizzes.length > 0 && !isGameOver ? (
        <QuizCard
          quiz={quizzes[score]}
          onUpdateScore={handleUpdateScore}
          score={score}
        />
      ) : null}
    </main>
  )
}

export default Card
