http = require("http")

 
 

http.createServer(function(req,res){
    console.log("server works...requesting ..... "+req.url);

    res.end("hi");
}).listen(9999)