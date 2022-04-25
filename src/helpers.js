import axios from 'axios'

const fetchQuizzes = async () => {
  try {
    const response = await axios.get(
      'https://opentdb.com/api.php?amount=20&category=18&type=multiple'
    )
    const data = response.data.results
    return data
  } catch (error) {
    console.log(error)
  }
}

export default fetchQuizzes
