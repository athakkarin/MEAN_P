const express = require('express')
const multer  = require('multer')



const app = express()



const mystorage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads")
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

const upload = multer({ storage:mystorage,
    fileFilter:function(req,file,cb){
        if(file.mimetype == "image/jpeg" || file.mimetype == "image/x-png"){
            cb(null,true);
        }else{
            cb(null,false);
            cb(new Error("Valid Extension are jpeg / png "))

        }
    },
    limits:{fileSize:1584675}
})


app.post('/signup', upload.single('profilepic'), function (req, res) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any

    console.log(req.body);
    console.log(req.file);
    res.json({msg:"Signup done",status:200,data:"signup done"})
})

app.listen(9999)