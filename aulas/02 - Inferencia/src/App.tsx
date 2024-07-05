import React from 'react'
import './index.css'

const App = () => {
  const [total, setTotal] = React.useState(0)

  // Os eventos recebidos recebidos são um interface criado pelo React para a anotação deles
  // por isso é nescessário aprender a como usar o typescript com React
  function adicionar(event: React.MouseEvent) {
    setTotal(total + 1)
  }

  return (
    <div>
      {total}
      <button onClick={adicionar}>Adicionar</button>
    </div>
  )
}

export default App
