# Useful codes for and by Karappo Inc.

[![Build Status](https://travis-ci.org/karappo/npm-util.svg?branch=master)](https://travis-ci.org/karappo/npm-util)

# for Users
## Features

```js
import { hexToRgb } from '@karappo-inc/util'

hexToRgb('#000000') // 'rgb(0,0,0)'
```

```js
import { isValidColor } from '@karappo-inc/util'

isValidColor('red') // true
isValidColor('#ffffff') // true
isValidColor('rgba(0,0,0,0.5)') // true
```

# for Developers

#### Publish to npm registory

You can also publish manualy
```sh
npm login
yarn publish
```