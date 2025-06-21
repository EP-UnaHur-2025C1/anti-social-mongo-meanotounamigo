const { User } = require('../mongoSchemas')

//CRUD
const getUsers = async ( _ , res) =>{
  const users = await User.find({});
  res.status(200).json(users);
};

const getUserById = async (req, res) => {
    const user = req.user;
    res.status(200).json(user);
};

const createUser = async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
};

const updateUserById = async (req, res) => {
    const{nickname, email} = req.body;
    const user = req.user;
    user.nickname = nickname;
    user.email = email;
    await user.save();
    res.status(200).json({message: 'Usuario actualizado correctamente', user});
};

const deleteUserById = async (req, res) => {
  await req.user.deleteOne();
  res.status(200).json({ message: 'Usuario eliminado correctamente', user: req.user });
};

module.exports = {
    getUsers, 
    getUserById, 
    createUser, 
    updateUserById, 
    deleteUserById,
}