const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {

  it('should reject non-string values', () => {
    var name = 679;
    var room = 656434;

    expect(isRealString(name)).toBe(false);
    expect(isRealString(room)).toBe(false);

  });

  it('should reject string with only spaces', () => {
    var name = '   ';
    var room = '    ';

    expect(isRealString(name)).toBe(false);
    expect(isRealString(room)).toBe(false);

  });

  it('should allow string with non-space characters', () => {
    var name = '  name  ';
    var room = '  theRoom  ';

    expect(isRealString(name)).toBe(true);
    expect(isRealString(room)).toBe(true);

  });


});
