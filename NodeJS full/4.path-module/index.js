const path = require('path');

console.log("🔹 __filename:", __filename);
console.log("🔹 __dirname:", __dirname);

// 1. dirname
console.log("\n1. dirname:");
console.log(path.dirname(__filename));

// 2. basename
console.log("\n2. basename:");
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js')); // without extension

// 3. extname
console.log("\n3. extname:");
console.log(path.extname(__filename));

// 4. join
console.log("\n4. join:");
const joinedPath = path.join(__dirname, 'folder', 'file.txt');
console.log(joinedPath);

// 5. resolve
console.log("\n5. resolve:");
const resolvedPath = path.resolve('folder', 'file.txt');
console.log(resolvedPath);

// 6. parse
console.log("\n6. parse:");
const parsed = path.parse(__filename);
console.log(parsed);

// 7. format
console.log("\n7. format:");
const formatted = path.format({
  dir: parsed.dir,
  name: 'newFile',
  ext: '.js'
});
console.log(formatted);

// 8. isAbsolute
console.log("\n8. isAbsolute:");
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute('file.txt'));

// 9. normalize
console.log("\n9. normalize:");
console.log(path.normalize('/folder//subfolder/../file.txt'));

// 10. relative
console.log("\n10. relative:");
console.log(path.relative(__dirname, joinedPath));