var Express=require("express");
var Mongoclient=require("mongodb").MongoClient;
var cors=require("cors");
var multer=require("multer");

var app=Express();
app.use(cors());

var CONNECTION_STRING="mongodb+srv://admin-mani:0ai8Qvny939dH9zv@cluster0.jt7hdhv.mongodb.net/?retryWrites=true&w=majority";

var DATABASENAME="MiniProDb";
var database;

// Make a Connection with MongoDb

app.listen(5038,()=>{
    Mongoclient.connect(CONNECTION_STRING,(error,client)=>{
        database=client.db(DATABASENAME);
        console.log("Mongo Connection Successfully");
    })
});
// Weaver Details
app.get('/api/MiniProDb/getdata',(request,response)=>{
    database.collection("AddedDetails").find({}).toArray((error,result)=>{
        response.send(result);
    });
});
app.post('/api/MiniProDb/postData',multer().none(),(request,response)=>{
    data=request.body;
    database.collection("AddedDetails").count({},function(error,numOfDocs){
        database.collection("AddedDetails").insertOne({
            id:(numOfDocs+1).toString(),
            data
      });
        response.json("Added Successfully");
    });
  });

//   constructionDetails

  app.get('/api/MiniProDb/constructionDetails/getData',(request,response)=>{
    database.collection("constructionDetails").find({}).toArray((error,result)=>{
        response.send(result);
    });
});

  app.post('/api/MiniProDb/constructionDetails/postData',multer().none(),(request,response)=>{
    data1=request.body;
    database.collection("constructionDetails").count({},function(error,numOfDocs){
        database.collection("constructionDetails").insertOne({
            id:(numOfDocs+1).toString(),
            data1
      });
        response.json("Added Construction Fee Successfully!");
    });
  });
  // Labour (Mesthri) Details

  app.get('/api/MiniProDb/constructionDetails/labourAccountDetails/getData',(request,response)=>{
    database.collection("LabourAccountDetails").find({}).toArray((error,result)=>{
        response.send(result);
    });
});
  app.post('/api/MiniProDb/constructionDetails/labourAccountDetails/postData',multer().none(),(request,response)=>{
    labourData=request.body;
    database.collection("LabourAccountDetails").count({},function(error,numOfDocs){
        database.collection("LabourAccountDetails").insertOne({
            id:(numOfDocs+1).toString(),
            labourData
      });
        response.json("Added Labour Fee Successfully!");
    });
  });

  // Electrician Details

app.get('/api/MiniProDb/constructionDetails/ElectricianAccountDetails/getData',(request,response)=>{
    database.collection("ElectricianAccountDetails").find({}).toArray((error,result)=>{
        response.send(result);
    });
});
  app.post('/api/MiniProDb/constructionDetails/ElectricianAccountDetails/postData',multer().none(),(request,response)=>{
    electricianData=request.body;
    database.collection("ElectricianAccountDetails").count({},function(error,numOfDocs){
        database.collection("ElectricianAccountDetails").insertOne({
            id:(numOfDocs+1).toString(),
            electricianData
      });
        response.json("Added Electrician Fee Successfully!");
    });
  });

  // Carpenter Details
  
app.get('/api/MiniProDb/constructionDetails/CarpenterAccountDetails/getData',(request,response)=>{
  database.collection("CarpenterAccountDetails").find({}).toArray((error,result)=>{
      response.send(result);
  });
});
app.post('/api/MiniProDb/constructionDetails/CarpenterAccountDetails/postData',multer().none(),(request,response)=>{
  carpenterData=request.body;
  database.collection("CarpenterAccountDetails").count({},function(error,numOfDocs){
      database.collection("CarpenterAccountDetails").insertOne({
          id:(numOfDocs+1).toString(),
          carpenterData
    });
      response.json("Added Carpenter Fee Successfully!");
  });
});

// Authentication
app.get('/api/MiniProDb/Authentication/getData',(request,response)=>{
  database.collection("Authentication").find({}).toArray((error,result)=>{
      response.send(result);
  });
});

// app.post('/api/MiniProDb/Authentication/postData',multer().none(),(request,response)=>{
//   adminData=request.body;
//   database.collection("Authentication").count({},function(error,numOfDocs){
//       database.collection("Authentication").insertOne({
//           id:(numOfDocs+1).toString(),
//           adminData
//     });
//       response.json("Login Successfully!");
//   });
// });
