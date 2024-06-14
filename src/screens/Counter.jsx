import { useContext, useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import '../App.css'
import Navbar from '../components/Navbar'
import { counterContext } from '../context/counterContext'

function Counter() {
    const [count, setCount] = useState(0)
    const { contador } = useContext( counterContext )
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button>
          contador es {contador}
        </button>
      </div>
      <p className="read-the-docs">
        <Navbar />
      </p>
    </>
  )
}

export default Counter
