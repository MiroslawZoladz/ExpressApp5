'use strict';
var express = require('express');
const sqlite3 = require('sqlite3').verbose();

var router = express.Router();

// open the database
let db = new sqlite3.Database('test1.db', sqlite3.SQLITE_OPEN_CREATE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to database.');
});

//db.serialize(() => {
//    db.run("INSERT INTO MyTable (Name,Other) VALUES (?,?)", ['kot', 'mat']);
//    db.all("SELECT * FROM MyTable ORDER BY ID", function (err, rows) {

//    });
//});
s="<table style="width:100%">
    <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
    </tr>
    <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
    </tr>
</table>"


/* GET home page. */
router.get('/', function (req, res) {
    //res.render('index', { title: 'Express - MZoladz - ble' });
    db.all("SELECT * FROM MyTable ORDER BY ID", function (err, rows) {
        res.json(rows); //res.console.log(rows);
    });
});

module.exports = router;
