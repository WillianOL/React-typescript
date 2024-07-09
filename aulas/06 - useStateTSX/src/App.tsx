import React from 'react';
import './index.css';
import Button from './Button';

function user() {
  return {
    nome: 'Willian',
    profissao: 'Desenvolvedor',
  };
}

interface User {
  nome: string;
  profissao: string;
}

const App = () => {
  // Exemplo onde o dado pode assumir mais de um valor. Como de null para alguma coisa
  const [dado, setDado] = React.useState<null | User>(null);
  // Sempre que formos passar a função que modifica o estado, devemos
  // anotar corretamente seu tipo com o retorno
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    setDado(user());
  }, []);

  return (
    <div>
      {dado && (
        <div>
          <h2>{dado.nome}</h2>
          <h3>{dado.profissao}</h3>
        </div>
      )}
      <div>
        <p>Total: {total}</p>
        <Button incrementar={setTotal} />
      </div>
    </div>
  );
};

export default App;
