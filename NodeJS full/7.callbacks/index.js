const fs = require('fs');

function person(name, callbackFn) {
  console.log(`hello ${name}`);
  callbackFn();
}

function address() {
  console.log("I am from India");
}

person("abhi", address);

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('error reading file', err);
        return;
    }
    console.log(data);
});