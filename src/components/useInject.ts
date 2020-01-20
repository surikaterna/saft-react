import { useEffect, useState, useContext } from "react";
import SaftContext from './SaftContext';

const useInject = <T>(type: T | number | string | symbol) => {
    const [injectedProp, setInjectedProp] = useState();
    useEffect(() => {
        const saftContext = useContext(SaftContext);
        Promise.resolve(saftContext.injector?.get(type)).then(resolvedType => setInjectedProp(resolvedType));
    });
    return <T>injectedProp;
}

export default useInject;