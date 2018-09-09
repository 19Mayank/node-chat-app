const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users=new Users();

    users.users = [{
      id:'1',
      name:'mayank',
      room:'fam'
    },{
      id:'2',
      name:'sumit',
      room:'fam mama'
    },{
      id:'3',
      name:'Himalaya',
      room:'fam'
    },{
      id:'4',
      name:'garima',
      room:'fam'
    },{
      id:'5',
      name:'Yogansh',
      room:'fam'
    },{
      id:'6',
      name:'Kratika',
      room:'fam'
    }]
  });

  it('should add new user', () => {
    var id = 679;
    var name = 'Mayank';
    var room = 'the office fans';
    var u1 = {id,name,room};

    var user = new Users();
    user.addUser(id, name, room);

    expect(user.users).toEqual([u1]);

  });

  it('should return name for fam', () => {

    var userList = users.getUserList('fam');

    expect(userList).toEqual(['mayank','Himalaya','garima','Yogansh','Kratika']);

  });

  it('should find User', () => {

    var user = users.getUser('2');
    expect(user.id).toEqual('2');
    expect(user).toEqual({
      id:'2',
      name:'sumit',
      room:'fam mama'
    });

  });

  it('should not find User', () => {

    var user = users.getUser('44');
    expect(user).toEqual();

  });

  it('should Remove a User', () => {

    var user = users.removeUser('2');
    expect(user.id).toEqual('2');
    expect(user).toEqual({
      id:'2',
      name:'sumit',
      room:'fam mama'
    });
    expect(users.users.length).toBe(5);

  });

  it('should not Remove a User', () => {

    var user = users.removeUser('22');
    expect(user).toNotExist();
    expect(users.users.length).toBe(6);

  });


});
