# observ-enum [![Build Status](https://travis-ci.org/bendrucker/observ-enum.svg?branch=master)](https://travis-ci.org/bendrucker/observ-enum) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/observ-enum.svg)](https://greenkeeper.io/)

> Observable value that can only accept a preset list of values


## Install

```
$ npm install --save observ-enum
```


## Usage

```js
var Enum = require('observ-enum')

var Color = Enum(['red', 'green', 'blue'])
var color = Color('green')
//=> ok!

color.set('purple')
//=> throws!
```

## API

#### `Enum(values)` -> `function`

Returns an [observable](https://github.com/raynos/observ) that behaves normally unless non-enumerated values are passed in.

##### values

*Required*  
Type: `array[string]`

Allowed string values for the enum.

## License

MIT © [Ben Drucker](http://bendrucker.me)
