// const express = require('express')
// const fileUpload = require('express-fileupload')

// const app = express()

// app.use(fileUpload())

// app.post('/',(req,res)=>{
//     if(req.files==null){
//         return res.status(400).json({msg:"No data found.."})
//     }
//     const file = req.files.file;
//     console.log("file",file)
// })

// app.listen(5000, ()=>console.log("Server Started....."))

var arr =[10,20,30,40,5]
var dup = arr[arr.length-1]
console.log("before sortiing--->",arr)
for(var i = arr.length-1;i>=0 ;i--){
    if(i == 0){
        arr[i] = dup
    }else{
        arr[i] = arr[i-1]
    } 
}
console.log("After  Sorting---->",arr)

