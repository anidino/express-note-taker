/////////////////// SET UP DEPENDENCIES & BOILERPLATE ////////////////////////////
const fs = require("fs");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

//// IMPORT THE "PATH" module here ////
const path = require("path");
//// SET VARIABLE THAT REQUIRES DB FILE TO ACCESS DATA //// 
const userNotes = require("./db/db.json")

//// set up Express app to handle data parsing ////
app.use(express.urlencoded({ extended: true })); //EXPRESS.JS METHOD THAT TAKES INCOMING POST DATA AND CONVERTS TO KEY/VALUE PARINGS THAT CAN BE ACCESSED IN THE REQ.BODY OBJECT   
app.use(express.json());   /// EXPRESS.JS METHOD THAT TAKES INNCOMING POST DATA AND PARSES INTO THE REQ.BODY 
app.use(express.static("public")); // USE THE EXPRESS.STATIC MIDDLEWARE FUNCTION TO ACCESS PUBLIC DIRECTORY 

////////////////// END BOILERPLATE & DEPENDENCIES ////////////////////////////////////////////

/// ROUTES START HERE ///////////////
/// HOME PAGE /////
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

/// GET /NOTES SHOULD RETURN THE NOTES.HTML FILE
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});


/// GET * SHOULD BE USED HERE TO RETURN THE INDEX.HTML FILE 
/// THE * ROUTE WILL RETURN USER TO HOME PAGE AND SHOULD ALWAYS COME AFTER OTHER NON API ROUTES THAT 'GET' OR IT WILL TAKE PRECEDENCE OVER THE OTHERS. ///// 
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

//// GET /api/notes should read the db.json file and return all saved notes json
app.get("/api/notes", (req, res) => {
    return res.json(userNotes);   /// will return all userNotes in json format 


});


///// POST /API/NOTES SHOULD RECEIVE A NEW NOTE TO SAVE ON THE REQUEST BODY AND ADD IT TO DB.JSON FILE, & RETURN NEW NOTE TO CLIENT 
app.post("/api/notes", (req, res) => {
    const newNote = req.body;

    userNotes.push(newNote);
    res.json(newNote);
})



///// APP IS LISTENING TO PORT //////////////
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
})