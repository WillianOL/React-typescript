import React from 'react';
import './index.css';
import useFetch from './useFetch';

interface Produto {
  id: string;
  nome: string;
  preco: number;
  descricao: string;
  quantidade: number;
}

const App = () => {
  const { data, error, loading } = useFetch<Produto[]>(
    'https://data.origamid.dev/produtos'
  );
  const [produtoID, setProdutoID] = React.useState<string | null>(null);
  const produto = useFetch<Produto>(
    `https://data.origamid.dev/produtos/${produtoID}`
  );

  return (
    <div style={{ display: 'flex' }}>
      <div>
        {data &&
          data.map(({ id }) => {
            return (
              <button key={id} onClick={() => setProdutoID(id)}>
                {id}
              </button>
            );
          })}
      </div>
      <div>
        {produto.data && produtoID && (
          <ul>
            <li>
              <h2>{produto.data.nome}</h2>
              <p>R$ {produto.data.preco}</p>
              <p>{produto.data.descricao}</p>
              <p>Quantidade: {produto.data.quantidade}</p>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
