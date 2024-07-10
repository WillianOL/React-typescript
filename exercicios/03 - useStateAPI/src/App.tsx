import React from 'react';
import './index.css';
import Input from './Input';

// Interface da API: https://data.origamid.dev/vendas/
// <!-- Essa API possui dados de hoje até 90 dias atrás -->

// 1 - Utilize a API: `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
// 2 - Inicio/Final é uma string do tipo data YYYY-MM-DD (padrão de saída do input tipo date)
// 3 - Crie ou reutilize o componente Input.tsx (Label com Input) das aulas anteriores
// 4 - Crie 3 estados reativos em App.tsx: data, inicio, final
// 5 - Utilize o componente Input.tsx para modificar o estado de inicio/final
// 6 - Crie um efeito que ocorrerá toda vez que inicio/final mudar. Se existir inicio/final, faça o fetch da API e popule o estado de data com o resultado.
// 7 - Caso data seja diferente de null, mostre na tela o nome e o status de cada venda do período selecionado

interface DadosCliente {
  id: number;
  nome: string;
  status: string;
}

const App = () => {
  const [data, setData] = React.useState<null | DadosCliente[]>(null);
  const [inicio, setInicio] = React.useState('');
  const [final, setFinal] = React.useState('');

  React.useEffect(() => {
    if (inicio && final) {
      fetch(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`)
        .then((response) => response.json())
        .then((json) => setData(json as DadosCliente[]));
    }
  }, [inicio, final]);

  return (
    <div>
      <Input type="date" label="Inicio:" setValue={setInicio} />
      <Input type="date" label="Final:" setValue={setFinal} />
      <ul>
        {data &&
          data.map(({ nome, status, id }) => {
            return (
              <li key={id}>
                <p>
                  {nome}: {status}
                </p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default App;
