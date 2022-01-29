
function needsLicense(kind){
    return kind === 'car'|| kind === 'truck'
}
console.log(needsLicense('car'))





/*function chooseVehicle(option1, option2){


let toArray = option1.split()
    for (i=0;i < toArray.length;i++){
        console.log(i)
    } 

var toArray = option1;
for (var i = 0; i < toArray.length; i++) {
    //console.log(toArray.charAt(i));
    
}
var toArray1 = option2;
for (var i = 0; i < toArray1.length; i++) {
   console.log(toArray1.charAt(i))
  //return  toArray1.charAt(i)
} */
 
function chooseVehicle(option1, option2) {
    
return `${option1 < option2 ? option1 : option2} is clearly the better choice.`;
    
 }

console.log(chooseVehicle('Wuling Hongguang', 'Wuling Gongguang'))