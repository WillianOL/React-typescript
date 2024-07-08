import React from 'react';
import './index.css';
import Input from './Input';

const App = () => {
  const [email, setEmail] = React.useState('');

  return (
    <div>
      <Input label="Nome" id="inputNome" placeholder="Nome" />
      <Input
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        label="Email"
        id="inputEmail"
        type="email"
        placeholder="exemplo@exemplo.com"
      />
      <Input label="CEP" id="inputCep" type="number" placeholder="00000-000" />
    </div>
  );
};

export default App;
