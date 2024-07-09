import React from 'react';

const CheckBox = ({ label }: { label: string }) => {
  const [value, setValue] = React.useState(false)

  // Podemos indicar exatamente que tipo de elemento o evento vai ser
  // Porém, podemos colocar essa função diretamente no elemento, assim o 
  // typescript vai inferir automaticamente
  const handleCheck: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.currentTarget.checked)
  }

  return (
    <label style={{padding: "1rem", border: `1px solid ${value ? '#8D2' : '#F10'}`}}>
      <input type="checkbox" checked={value} onChange={handleCheck} />
      {label}
    </label>
  );
};

export default CheckBox;
