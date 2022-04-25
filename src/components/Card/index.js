import React, { useState, useEffect } from 'react'
import './Card.css'
import StartCard from './StartCard'
import QuizCard from './QuizCard'

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
          'https://opentdb.com/api.php?amount=20&category=17&difficulty=easy&type=multiple'
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
      {!quizStart ? <StartCard changeMode={changeMode} /> : null}
      {/* This prevent the QuizCard from being rendered when the data fetching is not yet done */}
      {quizStart && quizzes.length > 0 ? <QuizCard quiz={quizzes[0]} /> : null}
    </main>
  )
}

export default Card
