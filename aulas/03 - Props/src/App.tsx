import React from 'react'
import './index.css'
import Button from './Button'

const App = () => {
  const [total, setTotal] = React.useState(0)

  function adicionar() {
    setTotal(total + 1)
  }

  return (
    <div>
      Total: {total}
      <Button tamanho={`1.5rem`} />
      {/* className aparece por conta do React.ComponentProps */}
      <Button className='botaoIncrementar' onClick={adicionar}>Incrementar</Button>
    </div>
  )
}

export default App
