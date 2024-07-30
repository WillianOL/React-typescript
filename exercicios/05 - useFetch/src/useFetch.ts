import React from 'react';

// Crie um custom hook chamado useFetch.
// 1 - Este hook deve retornar a interface:
// interface FetchState<T> {
//   data: T | null;
//   loading: boolean;
//   error: string | null;
// }
// Onde T é um valor genérico que deverá ser passado quando o Hook for utilizado.
// 2 - data, loading e error são estados reativos (useState).
// 3 - O hook deve receber a URL e OPTIONS como argumentos (interfaces de fetch).
// 4 - O fetch deve ocorrer em um useEffect, com dependência apenas da URL.
// 5 - Use AbortController para abortar o fetch caso o componente desmonte, antes do fetch ser concluído.
// 6 - Teste o Hook com a api: https://data.origamid.dev/produtos

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useFetch<T>(
  // interface de url para fetch
  url: RequestInfo | URL,
  // interface para o options do fetch
  options?: RequestInit
): FetchState<T> {
  const [data, setData] = React.useState<null | T>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const requestData = async () => {
      setLoading(true);
      setData(null);
      try {
        const response = await fetch(url, { signal, ...options });
        if(!response.ok) throw new Error(`Error: ${response.status}`)
        const data = (await response.json()) as T;
        if(!signal.aborted) setData(data)
      } catch (erro) {
        if(!signal.aborted && erro instanceof Error) setError(erro.message)
      } finally {
        if(!signal.aborted) setLoading(false)
      }
    };
    requestData();

    return () => {
      controller.abort()
    }
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}

export default useFetch;