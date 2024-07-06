import React from 'react';

// Esse seria o caminho mais demorado e detalhado da anotação dos tipos do componente.
interface ButtonProps {
  tamanho?: string;
  // Tipo do children
  children?: React.ReactNode;
  // Forma de anotar o tipo de funções, definindo seus respectivos retornos
  onClick?: () => void;
}

// Forma de indicar que o componente possue o children com as propriedades sem ter
// que indicar o tipo do children(forma mais rápida)
type ButtonProps2 = React.PropsWithChildren<{
  tamanho?: string;
  onClick?: () => void;
}>;

// Pode-se indicar o tipo do elemento, assim os métodos e propriedades do elemento
// vão ser mostradas e atribuidas
// E para extender o componente e anotar os métodos e propriedades usamos o &
type ButtonProps3 = React.ComponentProps<'button'> & {
  tamanho?: string;
  onClick?: () => void;
}
// Com isso, podemos usar o rest para receber o resto das propriedades
// e o spread para distribuilas
const Button = ({ tamanho, children, onClick, ...props}: ButtonProps3) => {
  return (
    <button onClick={onClick} style={{ fontSize: tamanho }} {...props}>
      {children || 'Adicionar'}
    </button>
  );
};

export default Button;
