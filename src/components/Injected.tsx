import React, { FC, ComponentType } from 'react';
import useInjects from './useInjects';

type MyInjects = {
    [key: string]: any
}

const Injected: FC<{ child: ComponentType<any>, childProps: any, types: string[], whileLoading: React.ReactElement | null }>
    = ({ child, childProps, types, whileLoading }) => {
        const injects = useInjects<MyInjects>(types);
        if (injects) {
            const C = child;
            return <C {...childProps} {...injects} />
        } else {
            return whileLoading;
        }
    }

export default Injected;