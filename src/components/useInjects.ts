import { useEffect, useState, useContext } from "react";
import SaftContext from './SaftContext';
import camelCase from 'lodash/camelCase';

const _fixPropName = (propName: any) => {
  let newPropName = propName;
  if (propName !== null && propName.includes('.')) {
    newPropName = camelCase(propName);
  }

  return newPropName;
}

// Checks the props object, if the value of a property is a promise it resolves it. When all are resolved then this new promise is resolved for the consumer
const PromiseProps = (props: Object): Promise<Object> => {
  return Promise.all(Array.from(Object.entries(props)).map(([key, value]) => Promise.resolve(value).then(value => ({ key, value }))))
    .then(results => {
      const ret = {};
      results.forEach(({ key, value }) => ret[key] = value);
      return ret;
    });
}

const arrayToObject = (array: (string | number | symbol)[]) =>
  array.reduce((obj, item) => { return { ...obj, [item]: item } }, {});


const useInjects = <T>(types: (keyof T)[] | { [P in keyof T]?: string | symbol } | string[], callback?: (injects: T) => void) => {
  const [injectedProps, setInjectedProps] = useState();
  const saftContext = useContext(SaftContext);

  useEffect(() => {
    //object looking like: {propName: 'keyToLookupFromSaft' | null to use propName as key}
    let typesSpec: { [key: string]: string | number | symbol } =
      types instanceof Array ? arrayToObject(types)
        : Object.keys(types).reduce((obj, item) => { return { ...obj, [item]: types[item] || item } }, {});

    const propsResolution = {};

    Object.keys(typesSpec).forEach(typeKey =>
      propsResolution[_fixPropName(typeKey)] = saftContext.injector?.get(typesSpec[typeKey])
    );

    PromiseProps(propsResolution).then(propsResult => {
      setInjectedProps(propsResult);
      if (callback) {
        callback(<T>propsResult);
      }
    })
  }, []);
  return <T>injectedProps;
}

export default useInjects;