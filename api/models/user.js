const mongoose = require('mongoose');
const {Schema,model} = mongoose;


const UserSchema = new Schema({
    username:{type: 'string', required: true,min:4,unique: true},
    password:{type: 'string', required: true},
});


const Usermodel = model('User',UserSchema)

module.exports = Usermodel;