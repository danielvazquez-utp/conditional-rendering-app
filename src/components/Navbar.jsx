import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav>
                <Link to='/' >Counter</Link> |
                <Link to='/incrementa' >Incrementar</Link> |
                <Link to='/decrementa' >Decrementar</Link> |
                <Link to='/reinicia' >Reiniciar</Link> |
                <Link to='/formularios' >Formularios</Link>
            </nav>
        </>
    )
}

export default Navbar