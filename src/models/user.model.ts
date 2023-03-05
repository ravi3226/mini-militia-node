import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    hash: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    purchasedGun: {
        type: [{
            type: mongoose.Types.ObjectId,
            ref: 'gun'
        }]
    },
    purchasedCloths: {
        type: [{
            type: mongoose.Types.ObjectId,
            ref: 'cloth'
        }]
    }
}, {timestamps: true})

export const User = mongoose.model('user', UserSchema);