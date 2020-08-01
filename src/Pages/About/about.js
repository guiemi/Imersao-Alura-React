import React, { useState, useEffect } from 'react'
import PageDefault from '../../Components/PageDefault'
import randomColor from 'randomcolor'

function About() {
  const [count, setCount] = useState(() => (5))
  const [color, setColor] = useState(null)
  useEffect(() => {
    setColor(randomColor())
  }, [count])

  return (
    <PageDefault>
      <h1 style={{ color: `${color}` }} >About</h1>
      <button onClick={() => setCount(currentCount => currentCount - 1)}> Subtrair</button>

      <span>{count}</span>

      <button onClick={() => setCount(currentCount => currentCount + 1)}> Adicionar </button>
    </PageDefault>
  )
}

export default About