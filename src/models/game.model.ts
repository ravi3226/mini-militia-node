import mongoose from 'mongoose';

const GameSchema = new mongoose.Schema({
    players: { // there will be validation for maxLength = 6
        type: [mongoose.Types.ObjectId]
    },
    expiredAt: {
        type: Date,
        required: true
    }
}, {timestamps: true})

export const Game = mongoose.model('game', GameSchema);