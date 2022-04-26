import React, { useState, useEffect } from 'react'
import './Card.css'
import StartCard from './StartCard'
import QuizCard from './QuizCard'
import GameOverCard from './GameOverCard'
import Time from './Time'

const Card = ({ highScore, onUpdateHighScore }) => {
  const [quizStart, setQuizStart] = useState(false)
  const [quizzes, setQuizzes] = useState([])
  const [score, setScore] = useState(0)
  const [sec, setSec] = useState(59)
  const [isGameOver, setIsGameOver] = useState(false)
  const [wrongAnswer, setWrongAnswer] = useState(false)

  // Mode: StartCard or QuizCard
  const handleChangeMode = (data) => {
    setQuizStart(data)
  }

  // This callback will be passed to QuizCard to update the score and the card
  const handleUpdateScore = (score) => {
    setScore(score + 1)
  }

  const handleResetScore = () => {
    setScore(0)
  }

  const handleWrongAnswer = () => {
    setWrongAnswer(true)
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

  // Update score on game over
  useEffect(() => {
    if (isGameOver) {
      if (score > highScore) {
        onUpdateHighScore(score)
      }
    }
  }, [isGameOver])

  // Deduct time on wrong answer
  useEffect(() => {
    if (wrongAnswer) {
      setWrongAnswer(false)
      setSec(sec - 10)
    }
  }, [wrongAnswer])

  return (
    <main>
      <Time
        sec={sec}
        onUpdateSec={handleUpdateSec}
        onGameOver={handleGameOver}
        quizStart={quizStart}
      />
      {isGameOver ? (
        <GameOverCard
          highScore={highScore}
          score={score}
          onGameOver={handleGameOver}
          onUpdateSec={handleUpdateSec}
          onChangeMode={handleChangeMode}
        />
      ) : null}
      {!quizStart && !isGameOver ? (
        <StartCard onChangeMode={handleChangeMode} />
      ) : null}
      {/* This prevent the QuizCard from being rendered when the data fetching is not yet done */}
      {quizStart && quizzes.length > 0 && !isGameOver ? (
        <QuizCard
          quiz={quizzes[score]}
          onUpdateScore={handleUpdateScore}
          onResetScore={handleResetScore}
          onWrongAnswer={handleWrongAnswer}
          score={score}
        />
      ) : null}
    </main>
  )
}

export default Card
