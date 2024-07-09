import React from 'react';

interface ButtonProps {
  incrementar: React.Dispatch<React.SetStateAction<number>>;
}

const Button = ({ incrementar }: ButtonProps) => {
  return <button onClick={() => incrementar((n) => n + 1)}>incrementar</button>;
};

export default Button;
