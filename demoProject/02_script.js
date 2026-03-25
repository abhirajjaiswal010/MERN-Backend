const fs = require("fs");


// fs.appendFile("hey.txt", "hey hel", function (err) {
//   if (err) console.error(err);
//   else console.log("done");
// });

// fs.rename('hey1.txt', 'hey2.txt', (err) => {
//   if (err) throw err;
//   console.log('Rename complete!');
// });

// fs.copyFile("hey2.txt", "./copy.txt", function (err) {
//   if (err) console.error(err);
//   else console.log("done copy");
// });

//* making a folder
// fs.mkdir("myFodler",(err)=>{
//     if(err) console.error(err)
//     console.log("folder done")
//     })

//* making nested folder
// fs.mkdir("parentFolder/childFolder/grandChild", { recursive: true }, (err) => {
//   if (err) {
//     return console.error("Error creating folder:", err);
//   }
//   console.log("Nested folders created!");
// });

//*remove folder
// fs.rm("parentFolder",{recursive:true},(err)=>{
//     if (err) console.error(err);
//     else console.log(err);
    
//     })