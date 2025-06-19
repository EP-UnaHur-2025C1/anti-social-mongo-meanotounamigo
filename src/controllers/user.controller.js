const { User } = require('../mongoSchemas')

//CRUD básicos

const getUsers = async ( _ , res) =>{
  const data = await User.find({});
  res.status(200).json(data);
};

const getUserById = async (req, res) => {
    const data = await User.findById(req.params.id);
    res.status(200).json(data);
};

const createUser = async (req, res) => {
    try{
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err){
        res.status(400).json({error: err.message});
    }
};

const updateUserById = async (req, res) => {
    const{nickname, email} = req.body;
    const user = await User.findById(req.params.id);
    user.nickname = nickname;
    user.email = email;
    await user.save();
    res.status(200).json({message: 'Usuario actualizado correctamente', user});
};

const deleteUserById = async (req, res) =>{
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Usuario eliminado correctamente', user})
};

module.exports = {
    getUsers, 
    getUserById, 
    createUser, 
    updateUserById, 
    deleteUserById,
    //userCreatePost, 
    //getUserByIdWithPosts, 
    //getUserByIdWithAPost,
    //userCreateComment, 
    //userDeletePostById, 
    //userUpdatePost, 
    //userDeleteCommentById,         
    //userUpdateComment, 
    //userGetComment
}