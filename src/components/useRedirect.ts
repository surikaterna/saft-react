import { useCallback } from 'react';
import { RouteComponentProps } from 'react-router';

interface Config {
  url: string;
  keys?: string[];
  cookie?: string;
}

const useRedirect = (history: RouteComponentProps['history'], config: Config) => {
  return useCallback(() => {
    const { url, keys = [], cookie } = config;

    for (const key of keys) {
      window?.sessionStorage?.removeItem(key);
    }
    if (cookie) {
      document.cookie = cookie;
    }
    history.replace(url);
  }, [history, config]);
}

export default useRedirect;