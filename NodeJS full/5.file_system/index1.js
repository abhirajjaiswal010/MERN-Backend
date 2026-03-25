const fs=require('fs')
const path=require('path')
const datafolder=path.join(__dirname,"data");

if(!fs.existsSync(datafolder)){
    fs.mkdirSync(datafolder)
    console.log("data folder created");
    
}

const filePath=path.join(datafolder,'example.js');
fs.writeFileSync(filePath,'Hello from node js ');
console.log("file created");

const readContentFromFile=fs.readFileSync(filePath,'utf8');
console.log('file content :',readContentFromFile);

fs.appendFileSync(filePath,'\n this is a new line added to that file')
console.log('new file content added');

