function loadUser(user) {
  var userAlreadyExists = typeof Meteor.users.findOne({ username : user.username }) === 'object';

  if (!userAlreadyExists) {
    Accounts.createUser(user);
  }
}

Meteor.startup(function () {

$.getJSON('../private/seed.js', function(data) {         
    alert(data);
});
  // for (key in users) if (users.hasOwnProperty(key)) {
  //   loadUser(users[key]);
  // }
});