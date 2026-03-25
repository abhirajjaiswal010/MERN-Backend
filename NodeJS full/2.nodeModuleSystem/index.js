const firstmodule=require('./first-module')
console.log(firstmodule.add(2,3));

try {
    
    let result=firstmodule.divide(2,0)
    console.log(result,'result');
    
    
} catch (err) {
    console.log("caught an error ", err.message);
    
}