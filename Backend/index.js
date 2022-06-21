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

// var arr =[10,20,30,40,5]
// var dup = arr[arr.length-1]
// console.log("before sortiing--->",arr)
// for(var i = arr.length-1;i>=0 ;i--){
//     if(i == 0){
//         arr[i] = dup
//     }else{
//         arr[i] = arr[i-1]
//     } 
// }
// console.log("After  Sorting---->",arr)






// PDF file creator

// const PDFkit = require('pdfkit')
// const doc = new PDFkit;
// const fs = require('fs')

// fs.readFile('hello.txt','utf8',(err,data)=>{
//     if (err) throw err
//     console.log(data)
//     doc.pipe(fs.createWriteStream('firstPDFFile1.pdf'));

// doc.fontSize(30)
// .text(data,10,10);
// doc.save()
// doc.end();
// })

// DOCX file reader

// const WordExtractor = require("word-extractor");
// const extractor = new WordExtractor();

// const extracted = extractor.extract("example.docx");

// extracted.then(function(doc) { console.log(doc.getBody()); });



// DOCX to PDF converter

// var docxConverter = require('docx-pdf');

// docxConverter('file.docx','./outputfile.pdf',function(err,result){
//   if(err){
//     console.log(err);
//   }
//   console.log('result'+result);
// });

// PDF reader

// const { PdfReader } = require("pdfreader");
// var text = ''
// new PdfReader().parseFileItems("output.pdf", (err, item) => {
//   if (err) console.error("error:", err);
//   else if (!item) console.warn("end of file");
//   else if (item.text) {
//       text = text +item.text; 
//   }
//   console.log(text)

// });
