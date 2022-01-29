// Part one
function needsLicense(kind){
    return kind === 'car'|| kind === 'truck'
}
console.log(needsLicense('car'))



// Part Two 


// My thinking process was to create a for loop 
// to loop through each character that was inputed as the
//parameter.  I had trouble trying to compare the values 
// of each  letter. For example how could i tel the computer that A comes before Z 
//  
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
 

// THis is the actual soultion to  part two but i dont understand 
// how it works. What in the code is telling the computer  
//that A comes before z.
function chooseVehicle(option1, option2) {
    
return `${option1 < option2 ? option1 : option2} is clearly the better choice.`;
    
 }

console.log(chooseVehicle('Wuling Hongguang', 'Wuling Gongguang'))