'use strict';

module.exports = function emailDateHeader(d){
  if (!(d instanceof Date)) d = new Date();

  d = ('' + d)
    .replace(/[a-z]+(\s[a-z]+)\s([0-9]+)(.+)/i, '$2$1$3')
    .replace(/[a-z]+([-+])|\s+\([a-z]+\)/ig, '$1');

  return {
    name: 'Date',
    value: d,
    toString: function(){
      return this.name + ': ' + this.value;
    }
  };
};
