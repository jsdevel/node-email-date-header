'use strict';

describe('email-date-header', function(){
  var emailDateHeader = require('..');

  it('should accept Date objects', function(){
    emailDateHeader(new Date());
  });

  it('should default date', function(){
    emailDateHeader();
  });

  describe('.name', function(){
    it('should return Date', function(){
      var header = emailDateHeader();
      header.name.should.equal('Date');
    });
  });

  describe('.value', function(){
    it('should represent dateStrings appropriately', function(){
      [
        [
          'Sat Jun 28 2014 00:09:33 GMT-0700 (MST)',
          '28 Jun 2014 00:09:33 -0700'
        ],
        [
          'Sat Jan 04 2014 23:03:43 GMT-0700 (MST)',
          '04 Jan 2014 23:03:43 -0700'
        ]
      ].forEach(function(set){
        var input = set[0];
        var expected = set[1];
        emailDateHeader(new Date(input))
        .value.should.eql(expected);
      });
    });
  });

  describe('.toString()', function(){
    it('should construct an email header', function(){
      var header = emailDateHeader();
      header.toString().should.eql('Date: ' + header.value);
    });
  });
});
