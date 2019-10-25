var dbCon = require("../config/db_connection");
var express = require("express");
var connection = dbCon.getConnection();

connection.connect();

var router = express.Router();

router.get("/", (req, res) => {
    connection.query("Select * from customer", (err,records,fields)=>{
        if(err){
            console.error("Error while fetching data");
        }else{
            res.send(records);
        }
    })
})

router.get("/:id", (req, res) => {
    connection.query("Select * from customer where id="+req.params.id, (err,records,fields)=>{
        if(err){
            console.error("Error while fetching data");
        }else{
            res.send(records);
        }
    })
})

router.post("/", (req, res) => {
    var id = req.body.id;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var mail = req.body.email;
    var phone = req.body.phone;
    connection.query("insert into customer values ("+id+",'"+firstname+"','"+lastname+"','"+mail+"','"+phone+"')", (err,records)=>{
        if(err){
            console.error("Error while inserting data : " + err);
        }else{
            res.send({insert:"success"});
        }
    })
})

router.put("/", (req, res) => {
    var id = req.body.id;
    var mail = req.body.email;
    var phone = req.body.phone;
    connection.query("update customer set email='"+mail+"',phone='"+phone+"' where id="+id, (err,records)=>{
        if(err){
            console.error("Error while inserting data : "+err);
        }else{
            res.send({insert:"success"});
        }
    })
})

router.delete("/:id", (req, res) => {
    connection.query("Delete from customer where id="+req.params.id, (err,records)=>{
        if(err){
            console.error("Error while deleting data");
        }else{
            res.send({delete:"delete success"});
        }
    })
})


module.exports = router;