# saft-react

> React bindings for Saft DI

[![NPM](https://img.shields.io/npm/v/saft-react.svg)](https://www.npmjs.com/package/saft-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-airbnb-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save saft-react
```

## Usage

```tsx
import * as React from 'react'

import {Saft, Injected} from 'saft-react'

@inject('mySaftKey')
class MyComponent extends React.Component {
  render() {
    const mySaftKey = this.props.mySaftKey;
    //...
    }
  }


class Example extends React.Component {
  render () {
    return (
      <Saft injector={saftInjector}>
        <Multiple>
          <Levels>
            <Of>
            <Components>
              <MyComponent />
            </Components>
           </Of>
          </Levels>
        </Multiple>
      </Saft>
    )
  }
}
```

## License

MIT © [surikaterna](https://github.com/surikaterna)
