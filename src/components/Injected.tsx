import React, { FC, ComponentType } from 'react';
import useInjects from './useInjects';

const Injected: FC<{ child: ComponentType<any>, childProps: any, types: string[], whileLoading: React.ReactElement }>
    = ({ child, childProps, types, whileLoading }) => {
        const injects = useInjects(types);
        if (injects) {
            const C = child;
            return <C {...childProps} {...injects} />
        } else {
            return whileLoading;
        }
    }

export default Injected;