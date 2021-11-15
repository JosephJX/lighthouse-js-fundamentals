for (let count = 100; count <=200; count ++) {
 var lo = count % 3 == 0; 
 var li = count % 4 == 0; 
 console.log(lo ? li ? "LoopyLightHouse" : lo ? "Loopy" : li ? "Lighthouse" : count);
}
