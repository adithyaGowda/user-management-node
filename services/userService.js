let userList = [{
    id: 1,
    name: 'john',
    email: 'abc@a.com',
    phone: 11111
},
{
    id: 2,
    name: 'mary',
    email: 'abc@a.com',
    phone: 11111
}];

exports.addUser = (userData, callback) => {
    userList.push(userData);
    let newUser = {
        ...userData,
        info: "User created successfully"
    }
    callback(null, newUser);
}

exports.getUsers = (callback) => {
    callback(null, userList);
}

exports.getUserById = (userId, callback) => {
    function userById(userId) {
        var result = userList.find(e => e ? e.id == userId : null);
        return result ? result : "No matches found";
    }

    callback(null, userById(userId));
}

exports.updateUser = (userId, userData, callback) => {

    function findAndUpdateUser(userId, userData) {
        let _userId = JSON.parse(userId);
        var index = userList.findIndex(e => e.id === _userId);
        if (index > -1) {
            userList[index] = userData;

            return {
                user: userData,
                info: "User updated successfully"
            };
        } else {
            return "No matches found";
        }

    }

    callback(null, findAndUpdateUser(userId, userData));
}

exports.deleteUserById = (userId, callback) => {

    function findUserAndDelete(userId) {
        let _userId = JSON.parse(userId);
        var index = userList.findIndex(e => e.id === _userId);

        if (index > -1) {
            userList.splice(index, 1);
            return "User deleted successfully";

        } else {
            return "No matches found";
        }
    }
    callback(null, findUserAndDelete(userId))
}