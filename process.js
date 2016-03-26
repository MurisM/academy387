//console.log(proces.argv);
var sum = 0
for(var i = 2; i < process.argv.lenght; i++){
    sum += parseInt(process.argv[i]);
 }
console.log(sum);