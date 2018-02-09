'use strict';
var express = require('express');
const sqlite3 = require('sqlite3').verbose();

var router = express.Router();

// open the database
//let db = new sqlite3.Database('test1.db', sqlite3.SQLITE_OPEN_CREATE, (err) => {
//    if (err) {
//        console.error(err.message);
//    }
//    console.log('Connected to database.');
//});

//db.serialize(() => {
//    db.run("INSERT INTO MyTable (Name,Other) VALUES (?,?)", ['kot', 'mat']);
//    db.all("SELECT * FROM MyTable ORDER BY ID", function (err, rows) {

//    });
//});



/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express - MZoladz - ble ble' });
//    db.all("SELECT * FROM MyTable ORDER BY ID", function (err, rows) {
//        var t_row = "";
//        for (let row of rows) {
//            t_row = t_row + row["Time"] + "\n\r";
//        }
//        res.send(t_row);
//    });
});

module.exports = router;
