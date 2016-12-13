/**
 * Created by Donya on 11/19/2016 AD.
 */
var app = require('express')();
var http = require('http').Server(app);
var express = require('express');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/b2s';
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
    }));
app.use(express.static(__dirname+'/'));

app.get('/',function (req,res) {
    res.sendFile(__dirname +'/directory.html');
})

app.get('/search/:BookName&&:Author', function (req,res) {
    MongoClient.connect(url, function (err, db) {
        if(err){
            return res.send({
                'status' : 1,
                'message' : err
            });
        }else{
            var col = db.collection('books');
            var query = { 'bookName' : req.params.BookName, 'author' : req.params.Author };
            console.log(query);

            col.findOne({
                'bookName' : req.params.BookName
            }, function(err,doc) {
                console.log(req.params.BookName+' and '+req.params.Author);
                if (err) {
                    return res.send({
                        'status': 1,
                        'message': err
                    });
                } else if (doc != null) {
                    console.log('Found ' + req.params.BookName +" by "+req.params.Author + ".");
                    return res.send({
                        'status': 0,
                        'message': 'Book Found',
                        'bookinfo': doc
                    });
                } else {
                    col.findOne({
                        'author' : req.params.Author
                    }, function(err,doc) {
                        console.log(req.params.BookName+' and '+req.params.Author);
                        if (err) {
                            return res.send({
                                'status': 1,
                                'message': err
                            });
                        } else if (doc != null) {
                            console.log('Found ' + req.params.BookName +" by "+req.params.Author + ".");
                            return res.send({
                                'status': 0,
                                'message': 'Book Found',
                                'bookinfo': doc
                            });
                        } else {
                            console.log('Cannot Find requested book');
                            console.log(doc);
                            console.log(req.params.Author);
                            return res.send({
                                'status': 2,
                                'message': 'id not found'
                            });
                        }
                    });

                }
                db.close();
            });
        }
    })
})

http.listen(3000, function () {
    console.log('listening on 3000');
});