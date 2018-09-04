var expect = require('expect');

var {generateMessage} = require('./message');

describe('generate a message', () => {

  it('should generate correct message object', () => {
      var from='mayank';
      var text = 'Some Message';
      var message = generateMessage(from, text);

      expect(message.createdAt).toBeA('number');
      expect(message).toInclude({from,text});

  });

});
