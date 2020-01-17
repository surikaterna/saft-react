import React from 'react';
interface SaftContextType {
    injector: any
}

const SaftContext = React.createContext<Partial<SaftContextType>>({});

export default SaftContext;