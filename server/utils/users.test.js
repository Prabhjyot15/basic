const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }];
  });

<<<<<<< HEAD
  /*it('should add new user', () => {
=======
  it('should add new user', () => {
>>>>>>> 5d7d634ca1fe544467358994d522aa1afc9a754e
    var users = new Users();
    var user = {
      id: '123',
      name: 'Andrew',
<<<<<<< HEAD
      image:'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350',
=======
>>>>>>> 5d7d634ca1fe544467358994d522aa1afc9a754e
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });
<<<<<<< HEAD
  */
=======
>>>>>>> 5d7d634ca1fe544467358994d522aa1afc9a754e

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = '99';
    var user = users.removeUser(userId);

<<<<<<< HEAD
    expect(user).toBeFalsy();
=======
    expect(user).toNotExist();
>>>>>>> 5d7d634ca1fe544467358994d522aa1afc9a754e
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '99';
    var user = users.getUser(userId);

<<<<<<< HEAD
    expect(user).toBeFalsy();
=======
    expect(user).toNotExist();
>>>>>>> 5d7d634ca1fe544467358994d522aa1afc9a754e
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should return names for react course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jen']);
  });
});
