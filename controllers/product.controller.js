var dbCon = require("../config/db_connection");
var express = require("express");
var connection = dbCon.getConnection();

connection.connect();

var router = express.Router();

router.get("/", (req, res) => {
    connection.query("Select * from product", (err,records,fields)=>{
        if(err){
            console.error("Error while fetching data");
        }else{
            res.send(records);
        }
    })
})

router.get("/:id", (req, res) => {
    connection.query("Select * from product where id =:id", (err,records,fields)=>{
        if(err){
            console.error("Error while fetching data");
        }else{
            res.send(records);
        }
    })
})





module.exports = router;