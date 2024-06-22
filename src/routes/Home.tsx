import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'


const Home = () => {

  const { theme, toogleTheme } = useContext(ThemeContext)

  return (
    <>
      <h1>Página inicial</h1>
      <button onClick={toogleTheme}>Mudar tema</button>
      <p>O tema atual é: {theme}</p>
    </>
  )
}

export default Home