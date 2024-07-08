import React from 'react'


// As interfaces de React com TypeScript estão disponíveis diretamente no objeto React importado de React.
// React.JSX - O que é retornado de um componente React(não é preciso utilizar)
const Button = ({children}: React.PropsWithChildren): React.JSX.Element => {
  // Não confundir eventos nativos de javascript com eventos do React
  // Outra forma de anotar e definindo o tipo da função
  const handleClick: React.MouseEventHandler = (event) => {
    console.log(event.pageX);
  }

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button
