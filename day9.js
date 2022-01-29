// Part one
/*function needsLicense(kind){
    return kind === 'car'|| kind === 'truck'
}
console.log(needsLicense('car')) */



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
/*function chooseVehicle(option1, option2) {
    
return `${option1 < option2 ? option1 : option2} is clearly the better choice.`;
    
 }

console.log(chooseVehicle('Wuling Hongguang', 'Wuling Gongguang')) */

//Part three 
// if the car is less than 3 years old it coset 80% of the original price
//if its more than 10 years old it costs 50% of the orignal price 
// if its at least 3 years old but not oldet than 10 years it cost 70% of original price
let nowPrice = 0
function calculateResellPrice(originalPrice, age){

    if(age < 3){
     nowPrice +=  originalPrice * 0.80
     return nowPrice
    }
    else if(age > 10){
        nowPrice += originalPrice * 0.50
        return nowPrice
    }
    else if (age >= 3 || age < 10){
        nowPrice += originalPrice * 0.70
        return nowPrice
    }

}
console.log(calculateResellPrice(1000,1))