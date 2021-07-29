/////////////////// SET UP DEPENDENCIES & BOILERPLATE ////////////////////////////
const fs = require("fs");
const express = require("express");
const PORT = 3001;

//// IMPORT THE "PATH" module here ////
const path = require("path");
//// SET VARIABLE THAT REQUIRES DB FILE TO ACCESS DATA //// 
const userNotes = require("./Develop/db/db.json")

//// set up Express app to handle data parsing ////
app.use(express.urlencoded({ extended: true }));  //EXPRESS.JS METHOD THAT TAKES INCOMING POST DATA AND CONVERTS TO KEY/VALUE PARINGS
// THAT CAN BE ACCESSED IN THE REQ.BODY OBJECT  
app.use(express.json());   /// EXPRESS.JS METHOD THAT TAKES INNCOMING POST DATA AND PARSES INTO THE REQ.BODY 
app.use(express.static("public")); // USE THE EXPRESS.STATIC MIDDLEWARE FUNCTION TO ACCESS PUBLIC DIRECTORY 

////////////////// END BOILERPLATE & DEPENDENCIES ////////////////////////////////////////////

/// Routes ////
app.get("/api/notes", (req, res) => {
    return res.json(userNotes);   /// will return all userNotes in json format 
    // res.json(userNotes[0]);   /// grab index of first or all??  ****************************************

});




///// APP IS LISTENING TO PORT //////////////
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
})