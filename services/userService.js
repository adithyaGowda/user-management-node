const user = require('../models/users');

exports.addUser = (userData, callback) => {

    const userDao = new user(userData);
    userDao.save((err, savedData) => {
        if (!err) {
            console.log(`User created successfully with ${savedData.userId}`);
        }
        callback(err, savedData);
    });

}

exports.getUsers = (callback) => {

    user.find({}, (err, userList) => {
        if (!err) {
            console.log("Users fetched successfully")
        }
        callback(err, userList);
    });

}

exports.getUserById = (_userId, callback) => {

    user.findOne({ userId: _userId }, (err, userData) => {
        if (!err) {
            console.log(`User Fetched successfully`);
        }
        //send the db output
        callback(err, userData);
    });
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