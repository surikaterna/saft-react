import React, { FC } from 'react';
import SaftContext, { SaftContextType } from './SaftContext';

const Saft: FC<SaftContextType> = props => (
  <SaftContext.Provider value={props}>
    {props.children}
  </SaftContext.Provider>
);

export default Saft;
