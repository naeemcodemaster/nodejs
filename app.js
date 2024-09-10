// console.log("hi this is node js");



// const math = require('./math');

// console.log(math.addition(10,20))
// console.log(math.subtraction(10,2));

// const {addition} = require('./math.js')
// console.log(addition(10,20))


// Built in Modules in Node JS
// http,fs,path etc....
// fs file system, you can interact with system to handle files, you can create files, write and append, create directory , delete directory etc...
// const fs = require('fs');
// fs.readFile("data.txt",(err,output)=>{
//     if(!err){
//     console.log(output.toString()); 
//     // console.log(output); 
//     }
// })

// const data = "This is data2 file";
// fs.writeFile('data2.txt',data,(err)=>{
//     if(!err){
//         console.log("File has been created");
//     }
// })

// fs.unlink('data2.txt',(err)=>{
//     if(!err){
//         console.log("File has been deleted");
//     }
// })



// Path module
// const path = require('path');
// // console.log(__dirname);

// const fullPath = path.join(__dirname,'data.txt');
// console.log(fullPath);

// const baseName = path.basename(fullPath);
// console.log(baseName);

// const dirName = path.dirname(fullPath);
// console.log(`Directory Name is ${dirName}`);


// Command Line CLI
const fs = require('fs');
const path = require('path');

const fullPath = path.join(__dirname,'files');
// console.log(fullPath);

// Create File
function createFile(fileName,content){
    const filePath = path.join(fullPath,fileName);
    fs.writeFile(filePath,content,(err)=>{
        if(err) throw err;
        console.log(`${fileName} has been created`);
    })
}

// read from file
function readFile(fileName){
    const filePath = path.join(fullPath,fileName);
    fs.readFile(filePath,(err,data)=>{
        if(err) throw err;
        console.log(`Content of ${fileName}: \n ${data}`)
    })
}


// Append to a file
function appendToFile(fileName,content){
    const filePath = path.join(fullPath,fileName);
    fs.appendFile(filePath,content,(err)=>{
        if(err) throw err;
        console.log(`${fileName} has been updated`);
    })
}

// Delete File
function deleteFile(fileName){
    const filePath = path.join(fullPath,fileName);
    fs.unlink(filePath,(err)=>{
        if(err) throw err;
        console.log(`${fileName} has been deleted`);
    })
}


// Create directory
function createDirectory(dirName){
    const newDirPath = path.join(fullPath,dirName);
    fs.mkdir(newDirPath,(err)=>{
        if(err) throw err;
        console.log(`Directory ${dirName} has been created`);
    })

}

// Remove Directory
function removeDirectory(dirName){
    const dirToRemove = path.join(fullPath,dirName);
    fs.rmdir(dirToRemove,(err)=>{
        if(err) throw err;
        console.log(`Directory ${dirName} has been removed`);
    });
}


// List All files and directories
function listFilesAndDirs(){
    const filesPath = path.join(fullPath);
    fs.readdir(filesPath,(err,files)=>{
        if(err) throw err;
        console.log(`Content of ${filesPath}`);
        files.forEach(file=>console.log(file));
    });
}

// usage
// createFile("one.txt","This is text one file");
// readFile("one.txt");
// appendToFile("one.txt","This is second line");
// createDirectory("test")
// removeDirectory("test");
// listFilesAndDirs();
// deleteFile("two.txt");





// c drive me node install file ka path
// console.log(process.argv[0])


// current project me file hoti hai.
// console.log(process.argv[1])
// console.log(process.argv[2])

// const action = process.argv[2];
// const arg1 = process.argv[3];
// const arg2 = process.argv[4];

// switch(action){
//     case 'create':
//         createFile(arg1,arg2);
//         break;
//     case 'read':
//         readFile(arg1);
//         break;
//     case 'append':
//         appendToFile(arg1,arg2);
//         break;
//     case 'delete':
//         deleteFile(arg1);
//         break;
//     default:
//         console.log("Unknown Action") 
// }


// How to write in terminal plz check this one
// node app.js create data.txt "this is first line";


// http (Hyper Text transfer protocol)

// first topic
// const http = require('http');
// const server = http.createServer((req,res)=>{
//     res.end("This is my server");
// })

// const PORT = 5000;
// server.listen(PORT,()=>{
//     console.log(`Server is running on port ${PORT}`)
// })




// // second topic
// const http = require('http');
// const server = http.createServer((req,res)=>{

//     req parameter => header,body,params,url
//     res.statusCode = 200;
//     res.setHeader('Content-Type','text/plain')
//     res.end("<h2>This is my server</h2>");
// })

// const PORT = 5000;
// server.listen(PORT,()=>{
//     console.log(`Server is running on port ${PORT}`)
// })


// Third topic
// const http = require('http');
// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type','text/html')
//     res.end("<h2>This is my server</h2>");
// })

// const PORT = 5000;
// server.listen(PORT,()=>{
//     console.log(`Server is running on port ${PORT}`)
// })



// second topic
// const http = require('http');
// const server = http.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.end('Home Page');
//     }else if(req.url === '/about'){
//         res.end('About Page');
//     }else if(req.url === '/contact'){
//         res.end('Contact Page');
//     }else{
//         res.end('404 page not found');
//     }
// })



// Serving HTML Files
const http = require('http');
// const server = http.createServer((req,res)=>{
//     if(req.url === '/'){
//         fs.readFile('index.html',(err,data)=>{
//             if(err){
//                 res.writeHead(500);
//                 res.end('Error loading file');
//             }else{
//                 res.writeHead(200,{'Content-Type':'text/html'});
//                 res.end(data);
                
//             }
//         })
//     }else if(req.url === '/about'){
//         fs.readFile('about.html',(err,data)=>{
//             if(err){
//                 res.writeHead(500);
//                 res.end('Error loading file');

//             }else{
//                 res.writeHead(200,{'Content-Type':'text/html'});
//                 res.end(data);
//             }
//         })
//     }else{
//         res.writeHead(404,{'Content-Type':'text/html'});
//         res.end('<h2>404 Page Not Found</h2>');
//     }
// })


// Serving JSON data
// const server = http.createServer((req,res)=>{

//     if(req.url === '/api/users'){
//         res.writeHead(200,{'Content-Type':'application/json'});
//         res.end(JSON.stringify([{name:'khan'},{name:'ali'}]));
//     }else{
//         res.writeHead(404,{'Content-Type':'application/json'});
//         res.end(JSON.stringify({message:'Not found'}));
//     }

// });




// OS (Operating System)
const PORT = 5000;
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

