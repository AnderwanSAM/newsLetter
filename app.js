//jshint esversion: 6 


// requesting modules
const express = require("express");
const bodyParser = require("body-parser");
//const request = require("request");






const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html");
    

})

app.post("/",function(req, res){

    const firstname = req.body.fName;
    const  lastName = req.body.LName;
    const  email = req.body.Email;
    const https = require('https');

    var data = {
        members : [
            {
                email_address : email,
                status: "subscribed",
                merge_fields:{
                    FNAME : firstname,
                    LNAME : lastName
                }
            }
        ]
    };

    const  jsonData = JSON.stringify(data);

    const url = "https://us1.api.mailchimp.com/3.0/lists/ab9037f2e9" ;

    const options = {
        method:"POST",
        auth: "andy:6848a8d9ee33e358e38877826951cf2d-us1"
    }
    
   var success = false ; 
   const request =  https.request(url,options,function(response){

       
        if (response.statusCode === 200 ){
            res.sendFile(__dirname + "/success.html");
    
        } else {
            res.sendFile(__dirname + "/failure.html");
        }
        

        response.on("data",function(data){
            console.log(JSON.parse(data));
            
        })
    

    });

    console.log(success);
    request.write(jsonData);
    request.end();
    

})


app.post("/failure",(req,res)=>{
    res.sendFile(__dirname + "/signup.html");
})
app.listen(3000,function(){
    console.log("Server running on port 3000");
})


//api key 
// 6848a8d9ee33e358e38877826951cf2d-us1

// list id
// ab9037f2e9