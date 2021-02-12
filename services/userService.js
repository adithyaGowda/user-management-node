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

exports.updateUser = (_userId, userData, callback) => {

    user.updateOne({ userId: _userId }, userData, (err, updatedUser) => {
        if (!err) {
            console.log(`User updated successfully`)
        }

        let status = {
            info: "User updated successfully",
            ...updatedUser
        }

        callback(err, status);
    });
}

exports.deleteUserById = (_userId, callback) => {

    user.deleteOne({ userId: _userId }, (err, deletedUser) => {
        if (!err) {
            console.log(`User deleted successfully`)
        }
        let status = {
            info: "User deleted successfully",
            ...deletedUser
        }
        callback(err, status);

    });
}