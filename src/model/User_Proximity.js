//const mongoose = require('mongoose');
import mongoose from 'mongoose';

const userProximitySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  location: {
    type: { type: String },
    coordinates: [Number]
  }
});

userProximitySchema.index({ location: '2dsphere' });

const User_Proximity = mongoose.model('User_Proximity', userProximitySchema);


export default User_Proximity;
