import React, { FC } from 'react';
import SaftContext from './SaftContext';

interface SaftProps {
    injector: unknown;
}

const Saft: FC<SaftProps> = props => (
  <SaftContext.Provider value={props}>
    {props.children}
  </SaftContext.Provider>
);

export default Saft;
