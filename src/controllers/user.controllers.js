const  User  = require("../bd/models")

//CRUD básicos

const getUsers = async (requestAnimationFrame, res) =>{
    try{
        const data = await User.find({});
        res.status(200).json(data);
    } catch (err){
        res.status(500).json({error: err.message});
    }
};

const getUserById = async (req, res) => {
    try{
        const data = await User.findById(req.params.id);
        if (!data) return res.status(404).json({ message: 'Usuario no encontrado'});
    } catch (err){
        res.status(500).json({ error: err.message});
    }
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
    try{
        const{nickname, email} = req.body;
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'Usuario ${user} no encontrado'});

        user.nickname = nickname;
        user.email = email;
        await user.save();
        res.status(200).json({message: 'Usuario actualizado correctamente', user});
    } catch (err){
        res.status(400).json({error: err.message});
    }
};

const deleteUserById = async (req, res) =>{
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({message: 'Usuario ${user} no encontrado'});
    } catch (err){
        res.status(500).json({error: err.message})
    }
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