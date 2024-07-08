import React from 'react';
import Button from './Button';
import "./index.css"

function App() {
  const [total, setTotal] = React.useState(0);

  return (
    <div>
      <p>Total: {total}</p>
      <Button total={total} setTotal={setTotal} />
    </div>
  );
}

export default App;
