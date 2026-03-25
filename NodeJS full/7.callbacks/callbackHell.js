const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Step 1 - Read:", data);

    const newData = data + " Hello Abhi";

    fs.writeFile('input.txt', newData, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Step 2 - Written");

        fs.readFile('input.txt', 'utf8', (err, finalData) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Step 3 - Read Again:", finalData);
        });

    });

});