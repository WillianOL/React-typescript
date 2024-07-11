import React from 'react'
import './index.css'

const App = () => {
  // Não precisamos anotar nenhum tipo especial para tratar no useEffect.
  React.useEffect(() => {
    console.log("montou");
    return () => {
      console.log('desmontou')
    }
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default App
