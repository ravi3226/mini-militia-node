import mongoose from 'mongoose'
import { Bullet } from './bullet.model.js';



const GunSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bullerPerMeg: {
        type: Number,
        required: true
    },
    oneHanded: {
        type: Boolean,
        required: true
    },
    bulletType: {
        type: Bullet,
        required: true
    },
    damageHelth: { // amount of health can be losed => refered as percentage
        type: Number,
        required: true
    }
}, {timestamps: true});

export const Gun = mongoose.model('gun', GunSchema);