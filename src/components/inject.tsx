import React from 'react';
import Injected from './Injected';
export const inject = (...types: string[]) => (Component: React.FC) => (childProps: object) => <Injected child={Component} types={types} childProps={childProps} whileLoading={null} />;
// const tryInject = (...types) => (Component) => (childProps) => <Injected child={Component} types={types} safe={true} childProps={childProps} />;
// const injectWithLoading = (...types) => (Component) => (childProps) => <Injected child={Component} types={types} childProps={childProps} showLoading={true} />;
