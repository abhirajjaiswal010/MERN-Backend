const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'demo.txt');
const copyPath = path.join(__dirname, 'copy.txt');

// 1. writeFile (create/write file)
fs.writeFileSync(filePath, "Hello Abhi 🚀");
console.log("1. File created & written");

// 2. readFile
const data = fs.readFileSync(filePath, 'utf-8');
console.log("2. File content:", data);

// 3. appendFile
fs.appendFileSync(filePath, "\nAppended text ✨");
console.log("3. Data appended");

// 4. rename
const newPath = path.join(__dirname, 'renamed.txt');
fs.renameSync(filePath, newPath);
console.log("4. File renamed");

// 5. copyFile
fs.copyFileSync(newPath, copyPath);
console.log("5. File copied");

// 6. existsSync
console.log("6. File exists?", fs.existsSync(newPath));

// 7. stat (file info)
const stats = fs.statSync(newPath);
console.log("7. Is file?", stats.isFile());
console.log("   Size:", stats.size);

// 8. mkdir (create folder)
const dirPath = path.join(__dirname, 'testFolder');
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    console.log("8. Folder created");
}

// 9. readdir (read folder)
const files = fs.readdirSync(__dirname);
console.log("9. Files in current directory:", files);

// 10. unlink (delete file)
fs.unlinkSync(copyPath);
console.log("10. Copied file deleted");

// 11. rmdir (delete folder)
fs.rmdirSync(dirPath);
console.log("11. Folder deleted");

// 12. readFile (async example)
fs.readFile(newPath, 'utf-8', (err, data) => {
    if (err) return console.log("Error:", err);
    console.log("12. Async read:", data);
});