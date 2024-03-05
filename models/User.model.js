import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique:true,
        lowercase:true
    },
    email:{
        type: String,
        required: true,
        unique:true,
        lowercase:true
    },
    password:{
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^\+\d{10,15}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    }
},{timestamps:true});

export const User = mongoose.model('User', userSchema);
