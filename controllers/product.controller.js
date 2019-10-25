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
    connection.query("Select * from product where id="+req.params.id, (err,records,fields)=>{
        if(err){
            console.error("Error while fetching data");
        }else{
            res.send(records);
        }
    })
})

router.post("/", (req, res) => {
    var id = req.body.id;
    var name = req.body.name;
    var description = req.body.description;
    var price = req.body.price;
    connection.query("insert into product values ("+id+",'"+name+"','"+description+"',"+price+")", (err,records)=>{
        if(err){
            console.error("Error while inserting data : "+err);
        }else{
            res.send({insert:"success"});
        }
    })
})

router.put("/", (req, res) => {
    var id = req.body.id;
    var name = req.body.name;
    var price = req.body.price;
    connection.query("update product set name='"+name+"',price='"+price+"' where id="+id, (err,records)=>{
        if(err){
            console.error("Error while inserting data : "+err);
        }else{
            res.send({insert:"success"});
        }
    })
})

router.delete("/:id", (req, res) => {
    connection.query("Delete from product where id="+req.params.id, (err,records)=>{
        if(err){
            console.error("Error while deleting data");
        }else{
            res.send({delete:"delete success"});
        }
    })
})





module.exports = router;