const { clearScreenDown } = require("readline");

http = require("http")

http.createServer(function(req,res){
     
    let url = req.url 

    if( url == "/welcome"){
        res.end("Welcome...")
    }else if( url == "/time"){
        let d = new Date();
        res.end(d+""+d.getHours())
    }else{
        res.end("hi");
    }

}).listen(9999)