// console.log("hi this is node js");



// const math = require('./math');

// console.log(math.addition(10,20))
// console.log(math.subtraction(10,2));

// const {addition} = require('./math.js')
// console.log(addition(10,20))


// Built in Modules in Node JS
// http,fs,path etc....
// fs file system, you can interact with system to handle files, you can create files, write and append, create directory , delete directory etc...
const fs = require('fs');
fs.readFile("data.txt",(err,output)=>{
    if(!err){
    console.log(output.toString()); 
    // console.log(output); 
    }
})

fs.writeFile('data2.txt','This is data2 file',(err)=>{
    if(!err){
        console.log("File has been created");
    }
})

fs.unlink('data2.txt',(err)=>{
    if(!err){
        console.log("File has been deleted");
    }
})







