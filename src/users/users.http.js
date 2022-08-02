const userControllers = require('./users.controller');
const { toPromise } = require('../utils/toPromise');

const getAllUsers = async (req, res) => {
    const user = await toPromise(userControllers.getAllUsers());
    res.status(200).json(user);
};

const getUserById = async (req, res) => {
    const id = req.params.uuid;
    const [users, error] = await toPromise(userControllers.getUserById(id));
    if (error || !users) {
        res.status(400).json({ message: 'Try with another id' });
    }
    res.status(200).json(users);
};

const updateUser = async (req, res) => {
    const id = req.params.uuid;
    const data = req.body
    const [user, error] = await toPromise(
        userControllers.editUser(id, data)
    );
    if (error || !user) {
        res.status(400).json({ message: 'Try with another address' });
    }
    res.status(200).json({ user, message: 'all good' });
};


const deleteUser = async (req, res) => {
    const id = req.params.uuid;
    const [users, error] = await toPromise(userControllers.deleteUser(id));
    if (error || !users) {
        res.status(400).json({ message: 'Try with another id' });
    }
    res.status(200).json({ message: 'all good' });
};

module.exports = {
    getAllUsers,
    getUserById,
    deleteUser,
    updateUser
};