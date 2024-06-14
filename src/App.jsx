import React from 'react'
import Mainroutes from './components/Mainroutes'
import ContextProvider from './context/ContextProvider'

const App = () => {
  return (
    <ContextProvider>
      <Mainroutes />
    </ContextProvider>
  )
}

export default App