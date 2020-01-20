import React, { Component } from 'react';
import SaftContext from './SaftContext';

interface SaftProps {
    injector: any
}

export default class Saft extends Component<SaftProps> {
    render() {
        return <SaftContext.Provider value={this.props}>
            {this.props.children}
        </SaftContext.Provider>
    }
}