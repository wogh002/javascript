let user = new Object();
user.name = 'John';
user.surName = 'Smith';
user.name = 'Pete';
delete user.name;
console.log(user);
