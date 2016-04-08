
# html-attrs

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Map of all valid HTML attributes

## Installation

    $ npm install @f/html-attrs

## Usage

```js
var htmlAttrs = require('@f/html-attrs')

function isHtmlAttr (attr) {
  return htmlAttrs.hasOwnProperty(attr)
}
```

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/html-attrs.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/html-attrs
[git-image]: https://img.shields.io/github/tag/micro-js/html-attrs.svg?style=flat-square
[git-url]: https://github.com/micro-js/html-attrs
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/html-attrs.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/html-attrs
