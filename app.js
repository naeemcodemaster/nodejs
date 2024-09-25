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

const fullPath = path.join(__dirname, 'files');
// console.log(fullPath);

// Create File
function createFile(fileName, content) {
    const filePath = path.join(fullPath, fileName);
    fs.writeFile(filePath, content, (err) => {
        if (err) throw err;
        console.log(`${fileName} has been created`);
    })
}

// read from file
function readFile(fileName) {
    const filePath = path.join(fullPath, fileName);
    fs.readFile(filePath, (err, data) => {
        if (err) throw err;
        console.log(`Content of ${fileName}: \n ${data}`)
    })
}

// Append to a file
function appendToFile(fileName, content) {
    const filePath = path.join(fullPath, fileName);
    fs.appendFile(filePath, content, (err) => {
        if (err) throw err;
        console.log(`${fileName} has been updated`);
    })
}

// Delete File
function deleteFile(fileName) {
    const filePath = path.join(fullPath, fileName);
    fs.unlink(filePath, (err) => {
        if (err) throw err;
        console.log(`${fileName} has been deleted`);
    })
}


// Create directory
function createDirectory(dirName) {
    const newDirPath = path.join(fullPath, dirName);
    fs.mkdir(newDirPath, (err) => {
        if (err) throw err;
        console.log(`Directory ${dirName} has been created`);
    })

}

// Remove Directory
function removeDirectory(dirName) {
    const dirToRemove = path.join(fullPath, dirName);
    fs.rmdir(dirToRemove, (err) => {
        if (err) throw err;
        console.log(`Directory ${dirName} has been removed`);
    });
}


// List All files and directories
function listFilesAndDirs() {
    const filesPath = path.join(fullPath);
    fs.readdir(filesPath, (err, files) => {
        if (err) throw err;
        console.log(`Content of ${filesPath}`);
        files.forEach(file => console.log(file));
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
// const http = require('http');
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


// Difference between Sync and Async and Stream handling files

// Sync
// fs.readFileSync('data.txt','utf-8',(err,data)=>{
//     if(!err){
//         console.error(err);
//         return;
//     }

//     console.log(data);
// })
// console.log("hi");
//Reads the entire file content into memory at once.
//Suitable for small files, but can be inefficient or impractical for large files due to high memory usage.


// Async
//const fs = require('fs');
// fs.readFile('data.txt', 'utf8', (err, data) => {
//    if (err) {
//        console.error(err);
//        return;
//    }
//    console.log(data);
// });
// console.log("hi");
//Reads the entire file content into memory once the operation completes.
//Non-blocking and allows other operations to proceed, but still loads the entire file into memory.



// readable stream
// const readableStream = fs.createReadStream('example.txt', 'utf-8');
// readableStream.on('data', (chunk) => {
//     console.log(chunk);
// })
// readableStream.on('end', () => {
//     console.log("Stream ended")
// })
// //Processes data in chunks as it is read from the file.
// //    More memory-efficient for large files since it doesn’t load the entire file into memory.
// //    Allows for continuous processing of data (e.g., transforming or processing data as it is read).


// const writableStream = fs.createWriteStream('output.txt');
// writableStream.write('Hello, World!\n');
// writableStream.write('Another line of text.\n');
// writableStream.end(() => {
//    console.log('Stream ended');
// });




// OS (Operating System)



// const server = http.createServer((req,res)=>{
//     res.end('Server running')
// })
// const PORT = 5000;
// server.listen(PORT,()=>{
//     console.log(`Server is running on port ${PORT}`)
// })




// Express js 
// What Is Express JS? Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.

// Express.js makes it easy to define routes and handle HTTP requests.


// const express = require('express');
// const app = express();

// Middleware (express js json ko accept kry)
// app.use(express.json());

// // CRUD Operations (Create, read, update and delete)

// app.get('/',(req,res)=>{
//     res.send('Hello from Express JS');
// })

// app.get('/about',(req,res)=>{
//     res.send('About Page');
// })

// app.get('/contact',(req,res)=>{
//     res.send('Contact page')
// })

// app.post('/',(req,res)=>{
//     console.log(req.body);
//     const data = req.body;
//     // res.send('Form submitted');
//     // res.json({success:"Form submitted successfully"});
//     // res.json({status:200,msg:"form submitted"});
//     res.json({status:200,msg:data});
    
// })


// const os = require('os');
// const threads = os.cpus().length;
// console.log(threads);
// const fs = require('fs');

// console.log("1");
// console.log("2");

// fs.readFile("data.txt",(err,output)=>{
//     if(!err){
//     console.log(output.toString()); 
//     // console.log(output); 
//     }
// })


// const output = fs.readFileSync("data.txt", "utf-8"); 
// console.log(output); 
// console.log("3");
// console.log("4");



// =========== Package.json and package.lock.json
// // Note: package.json and package.lock.json both will be used to add packages,
// package.json will consist package name, and package.lock.json will contain package name with other details as well, so descriptions of any packages like version etc  will be shown over there in package.lock.json file.



// Package version 4.2.3
// 4  Major release   (4 say 5 hogya hai major update or breaking update)
// 2  minor release   (ak chota sa feature add krna,security issue fix)  recommended
// 3  small type error fix or any bug fix  (e.g , usman, Usman,  type change, number,float,string etc...)


// ^ caret mean ^3.16.2   yaha py jb ap likhain gy npm update tu let say 3.17.0 krdega q k 16 say 17 version ayah hai but 3 agr 4 ata hai tu nhi kry ga, hum ne ^caret ki help say block kya hai.
// 3 ko lock kro

// "express": "4.21.0" → Installs only version 4.21.0, no updates unless manually done.
// "express": "^4.21.0" → Allows updates to minor and patch versions (e.g., 4.22.0, 4.21.1) but won't install breaking major versions (e.g., 5.0.0).


// When to Use Specific Status Codes:
// 200 OK: Use for successful responses with a payload.
// 201 Created: Use when a resource is successfully created.
// 204 No Content: Use when a successful request has no content to return (e.g., after a DELETE request).
// 400 Bad Request: Use for client errors in the request syntax or parameters.
// 401 Unauthorized: Use for authentication errors.
// 403 Forbidden: Use when the user is authenticated but not authorized to access the resource.
// 404 Not Found: Use when the requested resource does not exist.
// 422 Unprocessable Entity: Use for validation errors where the request format is correct but the content is invalid.
// 500 Internal Server Error: Use for unexpected server errors.

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   // Get the IP address of the request
//   const ip = req.ip || req.connection.remoteAddress;
  
//   res.send(`Your IP address is: ${ip}`);
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });


// =============== Middleware ===============
const express = require('express');
const app = express();
const router = express.Router();

const routerProduct = express.Router();

// nodejs routing handling complex
// express easy way to handle routing, provide middlewares, some extra facilities


// Middleware
// In Node.js, **middleware** is a function that sits between the request and the response in the application’s request-response cycle. Middleware functions are commonly used to perform tasks such as:

// - Logging
// - Authentication
// - Error handling
// - Request parsing
// - Response modification



// Middleware (express js json ko accept kry)

// Built in Middleware
app.use(express.json());

// static files
// app.use(express.static());

// jo form k data ata hai os ko json me parse krta
// app.use(bodyParser.urlencoded({ extended: false }));




// Custom Middleware 
// application level middleware
// app.use((req,res,next)=>{
//     console.log("Middleware called");
//     next();
// })




// app.get('/',(req,res)=>{
//     res.end('home page');
// })

// app.post('/register',(req,res)=>{
//     console.log(req.body);
    // const user = req.body;
    // if(user.email == ''){
    //     return res.json({error:'Email is required'})
    // }
    // by using destructuring
    // const {email,password} = req.body;
    // if(email == ''){
    //     return res.json({error:'Email is required'})

    // }

    

//     res.json({output:'fetched'})
// })


// Router base middleware
router.get('/profile',(req,res)=>{
    res.send('user page');
})

router.get('/changepassword',(req,res)=>{
    res.send('change password page');
})

// products
routerProduct.get('/productdetails',(req,res)=>{
    res.send('Product details page');
})
routerProduct.get('/productdetails',(req,res)=>{
    res.send('Product details page');
})



app.use('/api/user',router);
app.use('/api/product',routerProduct);




const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})





