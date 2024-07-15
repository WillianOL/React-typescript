import React from 'react';

const useLocalStorage = (
  key: string,
  initial: string
  // Ou podemos indicar os tipos das posições no retorno da função
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [state, setState] = React.useState(() => {
    return localStorage.getItem(key) || initial
  });

  React.useEffect(() => {
    localStorage.setItem(key, state)
  }, [state, key])

  // usar o as const para indicar que as posições dos dados da array são fixas(seus tipos)
  return [state, setState];
};

export default useLocalStorage;
