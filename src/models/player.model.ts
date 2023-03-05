import mongoose from 'mongoose'
import { Gun } from './gun.model.js';

const PlayerSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: true
    },
    deadCount: {
        type: Number,
        default: 0
    },
    killCount: {
        type: Number,
        default: 0
    },
    health: { // percentage
        type: Number,
        default: 100
    },
    primaryGun: { // player can purchase gun and set default gun in lobby,
        type: Gun,
        required: true
    },
    secondaryGun: {
        type: Gun
    },
    cloth: { // it has to be unique over single game document
        type: Number
    }
})

export const Player = mongoose.model('player', PlayerSchema);