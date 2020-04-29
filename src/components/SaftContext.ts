import { createContext } from 'react';

export interface SaftContextType {
  injector: unknown;
}

const SaftContext = createContext<Partial<SaftContextType>>({});

export default SaftContext;
