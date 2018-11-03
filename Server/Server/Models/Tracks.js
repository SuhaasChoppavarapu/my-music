'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating track schema in mongodb 

let trackSchema = new Schema({
        title: String,
        url: String,
        mbid: {type: String, unique: true, sparse: true},
        artistid: {type: String},
        artist: {type: String},
        image: String,
        listenersCount: Number,
        playCount: Number,
        tags: [{type: String}],
        wiki: {summary: String, published: {type: Date, default: Date.now()}},
        loves: [{type: mongoose.Schema.Types.ObjectId, ref: 'MymusicUser'}],
        comments: [{
            comment: String,
            user: {type: mongoose.Schema.Types.ObjectId, ref: 'MymusicUser'},
            dateCreated: {type: Date, default: Date.now}}],
        dateCreated: {type: Date, default: Date.now}
 }, {
    versionKey: false
 });

 //exporting module

 module.exports = mongoose.model('MymusicTrack', trackSchema);