

function chooseVehicle(option1, option2){


/*let toArray = option1.split()
    for (i=0;i < toArray.length;i++){
        console.log(i)
    } */

var toArray = option1;
for (var i = 0; i < toArray.length; i++) {
    console.log(toArray.charAt(i));
    
}
var toArray1 = option1;
for (var i = 0; i < toArray.length; i++) {
    console.log(toArray.charAt(i));
    
}


return toArray[0]
}

console.log(chooseVehicle('Wuling Hongguang', 'Toyota Corolla'))