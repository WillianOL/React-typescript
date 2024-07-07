import React from 'react';
import './index.css';
import Input from './Input';

const App = () => {
  return (
    <div>
      <Input label="Nome" id="inputNome" />
      <Input label="Email" id="inputEmail" />
    </div>
  );
};

export default App;
