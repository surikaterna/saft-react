import { useEffect, useState, useContext } from "react";
import SaftContext from './SaftContext';
import camelCase from 'lodash/camelCase';

const _fixPropName = (propName: string) => {
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

const useInjects = <T>(types: keyof T[] | { [P in keyof T]?: any }) => {
  const [injectedProps, setInjectedProps] = useState({});
  useEffect(() => {
    let typeNames: string[] = types instanceof Array ? types : Object.keys(types);
    const saftContext = useContext(SaftContext);
    const propsResolution = {};
    typeNames.forEach(type => propsResolution[_fixPropName(type)] = saftContext.injector?.get(type));
    PromiseProps(propsResolution).then(propsResult => {
      setInjectedProps(propsResult);
    })
  });
  return <T>injectedProps;
}

export default useInjects;