import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [Deck, setDeck] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
  const [LeftCards, setLeftCards] = useState([])
  const [RightCards, setRightCards] = useState([])

  const roll_two_sets = (arr) => {
    const new_arr = []
    let new_num = Math.floor(Math.random() * arr.length)
    for (let i = 0; i < 4; i++) {
      while (new_arr.includes(new_num)) {
        new_num = Math.floor(Math.random() * arr.length)
      }
      new_arr.push(new_num)
    }
    console.log(new_arr)
    setLeftCards(new_arr.slice(0, 2))
    setRightCards(new_arr.slice(2))
  }

  return (
    <>
      <button onClick={(e) => roll_two_sets(Deck)}>roll two</button>
      <div style={{ "display": "flex" }}>
        <div>
          <h3>Left</h3>
          <p>{LeftCards}</p>
        </div>
        <div>
          <h3>Right</h3>
          <p>{RightCards}</p>
        </div>
      </div>
    </>
  )
}

export default App
