
// const os = require('os');

// // info about current user
// const user = os.userInfo();


// //method returns the system uptime in seconds
// console.log(user);
// console.log(`The Sytstem Uptime is ${os.uptime()} seconds`);

// const currentOS = {
//     name:os.type(),
//     release:os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// }
// console.log(currentOS);


// const path = require('path');

// console.log(path.sep);

// const filePath = path.join('./content///////', 'subfolder','text.txt');
// console.log(filePath);

// const base = path.basename(filePath);
// console.log(base);

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
// console.log(absolute);
// const {readFile, writeFile} = require('fs');

// readFile('./content/first.txt','utf8', (err,result)=>{
//     if(err){
//         return;
//     }
//     const first = result;
//     readFile('./content/second.txt', 'utf-8', (err,result)=>{
//         if(err){
//         return;
//     }
//     const second = result;
//     writeFile('./content/result-async.txt', 'Hello guys'
//     , (err, result)=> {
//         if(err){
//             console.log(err);
//             return;
//         }
//         console.log(result);
//     })
// })

// const http = require('http');

// const server = http.createServer((req,res)=>{
//     if (req.url === '/') {
//         res.end('Welcome to our home page')
//     }
//     else if (req.url == '/about') {
//         res.end('Here is about page')
//     }
//     else {
//     res.end(`
//         <h1>Oops! </h1>
//         <p> We can't reach page. Please try again! </p>
//         <a href="/"> Back home ! </a>
//     `) }
// })

// server.listen(5000)