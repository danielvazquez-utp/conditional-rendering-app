import React, { useState } from 'react'
import { counterContext } from './counterContext'

const ContextProvider = ({ children }) => {
    const [contador, setContador] = useState(77)
    const incrementar = () => {
        setContador( contador + 1 )
    }
    const decrementar = () => {
        setContador( contador - 1 )
    }
    const reiniciar = () => {
        setContador( 0 )
    }

    const [experiencia, setExperiencia] = useState(false)

    return (
        <counterContext.Provider
            value={{
                contador, 
                incrementar,
                decrementar, 
                reiniciar,
                experiencia,
                setExperiencia,
            }}
        >
            { children }
        </counterContext.Provider>
    )
}

export default ContextProvider