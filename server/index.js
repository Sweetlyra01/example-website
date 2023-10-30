const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
    host: "localhost",
    user:"root",
    password: "",
    database: "fitfinityclients"
});

// MemberShip
//getting data
app.get("/fitfityclientsprogram", (request, response) => {

    const sqlSelect = "SELECT * FROM fitfityclientsprogram";

    db.query(sqlSelect, (err,res) => {
        if (err) {
            console.log("cannot fetch data");
        } else {
            response.send(res);
        }
    })
})
//inserting data
app.post("/fitfityclientsprogram/add", (request, response) => {

    const name = request.body.clientName;
    const lastname= request.body.clientLastname;
    const email= request.body.email;
    const num = request.body.contactNum;
    const program = request.body.preferredProgram	;


    const sqlInsert = "INSERT INTO fitfityclientsprogram (clientName, clientLastName, email, contactNum, preferredProgram ) VALUES ( ?, ?, ?, ?, ?)";

    db.query(sqlInsert, [ name, lastname, email, num, program ], (err, result) => {
        if (err) {
            console.log("error");
        } else {
            response.send("test")
        }
    })

})

//deleting data
app.delete("/fitfityclientsprogram/delete/:id", (request, response) => {

    const id = request.params.id;

    const sqlDelete = "DELETE FROM fitfityclientsprogram WHERE id = ?";

    db.query(sqlDelete, id, (err, result) => {
        if (err) {
            console.log("cannot delete member information");
        } else {
            console.log(`Item with ${response} succesfully deleted`)
        }
       });
});

// //update Client's data
// app.put("/fitfityclientsprogram", (request, program ) => {

//     const id = request.body.id;
//     const num =request.body.contactNum

//     const sqlUpdate= "UPDATE fitfityclientsprogram SET contactnum = ? WHERE id = ?";
//     db.query(sqlUpdate, [num,id], (err,res) => {
//         if (err) {
//             console.log("cannot be updated")
//         } else {
//             response.send(result);
//         }
//     })
// })

// app.get("/test", (req, res ) => {
//     res.send("hello");
// })

//Reviews
//inserting data
app.post("/clientreviews/add", (request, response) => {

    const name = request.body.name;
    const email= request.body.email;
    const comment= request.body.comment;


    const sqlInsert = "INSERT INTO clientreviews ( name, email, comment ) VALUES ( ?, ?, ? )";

    db.query(sqlInsert, [ name, email, comment ], (err, result) => {
        if (err) {
            console.log("error");
        } else {
            response.send("test")
        }
    })

})
//getting data
app.get("/clientreviews", (request, response) => {

    const sqlSelect = "SELECT * FROM clientreviews";

    db.query(sqlSelect, (err,res) => {
        if (err) {
            console.log("cannot fetch data");
        } else {
            response.send(res);
        }
    })
})



app.listen(PORT, () => {
    console.log(`running on server ${PORT}`);
})