var expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message');

describe('generate a message', () => {

  it('should generate correct message object', () => {
      var from='mayank';
      var text = 'Some Message';
      var message = generateMessage(from, text);

      expect(message.createdAt).toBeA('number');
      expect(message).toInclude({from,text});

  });

});


describe('generateLocationMessage', () => {

  it('should generate correct location object', () => {

    var from = 'Admin';
    var latitude =0;
    var longitude = 0;

    var url = `https://www.google.com/maps?q=0,0`;

    var locationMessage = generateLocationMessage(from, latitude, longitude);

    expect(locationMessage.from).toBe(from);
    expect(locationMessage.url).toBe(url);
    expect(locationMessage.createdAt).toBeA('number');
  });

});
