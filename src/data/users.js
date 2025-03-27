import users from './mock/users.json';

export const findUser = (username) => {
    const foundUser = users.find(user => user.username === username);

    return foundUser;
};