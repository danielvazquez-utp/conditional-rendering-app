import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import '../App.css'
import Navbar from '../components/Navbar'
import { useContext } from 'react'
import { counterContext } from '../context/counterContext'

function Decrement() {
    const { contador, decrementar } = useContext(counterContext)
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
      <h1>{ contador }</h1>
      <div className="card">
        <button onClick={() => decrementar()}>
          Decrementar
        </button>
      </div>
      <p className="read-the-docs">
        <Navbar />
      </p>
    </>
  )
}

export default Decrement
