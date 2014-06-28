# email-date-header [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]
> Creates an RFC compliant email date header.

## Example
```javascript
var emailDateHeader = require('email-date-header');
var today = new Date();// 'Sat Jun 28 2014 00:09:33 GMT-0700 (MST)'
var header = emailDateHeader(today);

header.name === 'Date';// true
header.value === '28 Jun 2014 00:09:33 -0700';// true
```

## A note about timezones
Javascript Date converts the offset of a given date object to system settings
so your results may differ across machines.  Consider this scenario:

You have a cluster of servers each with their system clocks adjusted to their
specific localities spread over the world in some data centers.  Your application
distributes an email message to send to all your servers.  Each has the potential
to generate a different header string representing their timezone.

You have been warned :|

##LICENSE
``````
The MIT License (MIT)

Copyright (c) 2014 Joseph Spencer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
``````

[downloads-image]: http://img.shields.io/npm/dm/node-email-date-header.svg
[npm-url]: https://npmjs.org/package/node-email-date-header
[npm-image]: http://img.shields.io/npm/v/node-email-date-header.svg

[travis-url]: https://travis-ci.org/jsdevel/node-email-date-header
[travis-image]: http://img.shields.io/travis/jsdevel/node-email-date-header.svg

[coveralls-url]: https://coveralls.io/r/jsdevel/node-email-date-header
[coveralls-image]: http://img.shields.io/coveralls/jsdevel/node-email-date-header/master.svg
