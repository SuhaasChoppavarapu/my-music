'use strict';
module.exports = function (app) {

    // user and track Routes for search and create.
    const mongoose = require('mongoose'),
    user = mongoose.model('MymusicUser'),
    track = mongoose.model('MymusicTrack');

    //creating new user
    app.post('/user/register',(req,res,next)=>{
        console.log(req.body);
   let newUser=new user({
       firstName:req.body.firstname,
       lastName: req.body.lastname,
       username: req.body.username,
       password: req.body.password,
       role: req.body.role,
       email: req.body.email

   });

   //Saving user to db using .save function in mongoose
        newUser.save((err,user)=>{
            if(err)
            {
                res.json({msg:'failed to create user'});
                console.log(err);
            }
            else
            {
                res.json({msg: 'user created successfully'});
            }
        })
        
});

app.get('/users',(req,res,next)=>{
    user.find(function(err,users){
        res.json(users);
    })
 });

 //login authentication
 app.post('/login',(req,res)=>{
    user.findOne(req.body,(err,user)=>{
        if(err){
            console.log(err);
           return res.status(200).send(err)
        }
        else{
            // console.log(user);
           return res.status(200).send(user);
        }
    })
});

//update profile
    app.put('/updateProfile',(req,res)=>{

        //updating existing records
        user.update(({_id:req.body._id},
        {$set:{ username: req.body.username,
            password: req.body.password,
            email: req.body.email
        }}),(err,raw)=>{
            if (err) {
                res.send(err);
              }
              console.log(raw);
              res.send(raw);
        })
    });

    //addFavourites

    app.put('/addFavorite',(req,res)=>{
        // var deferred = q.defer();
        user.findById(req.body._id,(err,user)=>{
            if(err){
                req.send(err);
            }else{
                user.favorites.push(req.body.trackId);
                user.save();
                // deferred.resolve(user);
                console.log(user);
                console.log(user.favorites);
                res.send(user);
            }
        })
    });

    //getting favourite tracks of users from db
    app.post('/getFavourites',(req,res)=>{
        user.findById(req.body._id,(err,user)=>{
            if(err){
                res.send(err);
            }else{
                res.json(user.favorites);
            }
        })
    });


    //Add track to database
    app.post('/addTrack',(req,res)=>{
        console.log(req.body);
        let newTrack= new track({
            title: req.body.title,
            artist: req.body.artistname,
            artistid: req.body.artistId,
            url: req.body.url,
            summary: req.body.summary
        })

        newTrack.save((err,track)=>{
            if(err)
            {
                res.json({msg:'failed to create track'});
                console.log(err);
            }
            else
            {
                res.json({msg: 'track added successfully'});
            }
        })
    });

    //getting artistracks from database

    app.post('/artistTracks',(req,res)=>{
        // console.log(req.body.artistId);
        track.find({artistid:   req.body.artistId },(err,tracks)=>{
            if(err){
                res.json(error);
            }else{
                res.json(tracks);
            }
        })
    })

    //deleting tracks from database
    app.post('/deleteTrack',(req,res)=>{
        console.log(req.body.title);
        track.deleteOne({title: req.body.title,
            artistid: req.body.artistId},(err,track)=>{
                if(err){
                    res.json(err);
                }else{
                    console.log(track);
                    res.json(track);
                }
            })
    });

    //getting alltracks added by artists from database

    app.get('/alltracks',(req,res)=>{
        track.find(function(err,tracks){
            if(err){
                res.json(err);
            }else{
                console.log(tracks);
                res.json(tracks);
            }
            
        })

    })

        
 };