import { useEffect, useState, useContext } from "react";
import SaftContext from './SaftContext';

const useInject = <T>(type: T | number | string | symbol, callback: (result: T) => void) => {
  const [injectedProp, setInjectedProp] = useState();
  const saftContext = useContext(SaftContext);
  useEffect(() => {

    Promise.resolve(saftContext.injector?.get(type)).then(resolvedType => {
      setInjectedProp(resolvedType);
      if (callback) {
        callback(resolvedType);
      }
    });

  }, []);
  return <T>injectedProp;
}

export default useInject;