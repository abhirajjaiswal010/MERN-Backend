function getData() {
    return new Promise((resolve) => {
        console.log("data is loading.....");
        
        setTimeout(() => {
            resolve("data");
        }, 2000);
    });
}

async function run() {
    const data = await getData();
    console.log(data);
    console.log("data received");
    
}

run();