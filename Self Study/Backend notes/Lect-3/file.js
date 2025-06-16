const fs = require('fs');
// // this is synchrounus method to create a txt file.
fs.writeFileSync('test.txt',"Hii, i am  srishti pal");



const fs1 = require('fs');

// This is Asynchrounus method to create file  and here we give a callback for get if any error occur.
fs1.writeFile('hello.txt',"Hii i am a full stack developer",(err)=>{
    console.log(err);
});
 
// in synchrounous read file method we can return value.

const result = fs.readFileSync('contact.txt',"utf-8");
console.log(result);


// In Asynchronous read file method we use callback.
fs.readFile('contact.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
})
const date = new Date();
// ppendFile use for add new data in file.
fs.appendFileSync('contact.txt',"\n" + new Date().getDate().toLocaleString() + "I Love hemi");

fs.mkdirSync("my-docs/a/b",{recursive:true});

console.log(fs.statSync("test.txt"));

// statSync use for create log for any file.