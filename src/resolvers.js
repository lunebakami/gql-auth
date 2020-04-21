const users = [
  {
    id: 1,
    email: 'lunebakami@gmail.com',
    password: '123456',
  },
  {
    id: 2,
    email: 'joycekelly@gmail.com',
    password: '123456',
  },
];

module.exports = {
  Query: {
    createSession: (_, { email, password }) => {
      const user = users.find((user) => {
        if (user.email === email && user.password === password) {
          return user;
        }
      });

      console.log(user);

      return user;
    },
  },
};
