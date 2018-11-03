'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating user schema in mongo db

let userSchema = new Schema({
    username: {type: String, unique:true},
    password: String,
    firstName: {type: String},
    lastName: String,
    email: String,
    phone: String,
    photo: String,
    role: {type: String, enum: ['ARTIST', 'USER'], default: 'USER'},
    messages: [{
        track: {type: mongoose.Schema.Types.ObjectId, ref: 'MymusicTrack'},
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'MymusicUser'},
        read: {type: Boolean, default: false },
        dateCreated: {type: Date, default: Date.now}}],
    favorites: [{type: String}],
    dateCreated: {type: Date, default: Date.now}
}, {
    versionKey: false
});

//exporting module

module.exports = mongoose.model('MymusicUser', userSchema);