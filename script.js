function convertToRoman(num) {
    
    // declare answer variable
    let answer = "";
    
    // declare variables to hold thousands, hundreds, tens and ones
    let fourDig = 0; 
    let threeDig = 0;
    let twoDig = 0;
    let oneDig = 0;
    
    // declare vaiables for just # place
    let fourPlaces = 0; 
    let threePlaces = 0;
    let twoPlaces = 0;
    let onePlaces = 0;

    // declare variables to hold Roman numerals for thousands, hundreds, tens and ones
    let fourRom = "";
    let threeRom = "";
    let twoRom = "";
    let oneRom = "";

    fourPlaces = Math.floor(num/1000)*1000;
    threePlaces =Math.floor((num - fourPlaces)/100)*100;
    twoPlaces = Math.floor((num - fourPlaces - threePlaces)/10)*10;
    onePlaces = ((num - fourPlaces - threePlaces - twoPlaces));

    if (fourPlaces > 0) {
        fourDig = fourPlaces + threePlaces + twoPlaces + onePlaces;
    }
    if (threePlaces > 0) {
        threeDig = threePlaces + twoPlaces + onePlaces;
    }
    if (twoPlaces > 0) {
        twoDig = twoPlaces + onePlaces;
    }
    oneDig = onePlaces;



    // function to go through comparison statements

function checkIf(_dig) {
    let roman = "";
    let multiple = 0;    
    
    if (_dig >= (1000)) {
        //define multiple
        multiple = Math.floor((_dig)/1000);
        
        // loop through multiples
        for (let j = 0; j < multiple; j++) {
            roman += "M"
        } 
    } else if (_dig >= (900)) {
        roman = "CM";
        }   



    return roman;

}







 

    fourRom =checkIf(fourDig);
    threeRom = checkIf(threeDig);
  //  twoRom =checkIf(twoDig);
  //  oneRom = checkIf(oneDig);

    // put four components of answer together  
    answer = fourRom + threeRom + twoRom + oneRom;


       // console.log variables for digits
       console.log("fourDig = " + fourDig);
       console.log("threeDig = " + threeDig);
       console.log("twoDig = " + twoDig);
       console.log("oneDig = " + oneDig);
   
   
       // console.log variables for digPlaces
       console.log("fourPlaces = " + fourPlaces);
       console.log("threePlaces = " + threePlaces);
       console.log("twoPlaces = " + twoPlaces);
       console.log("onePlaces = " + onePlaces);

   
       // console.log variables for roman
       console.log("fourRom = " + fourRom);
       console.log("threeRom = " + threeRom);
       console.log("twoRom = " + twoRom);
       console.log("oneRom = " + oneRom);
   






    console.log("answer = " + answer);
    return answer;
   }
   
   convertToRoman(900);

//commit text
/*
Add

Add logic to loop through array and find first pair where fourNum is greater than
*/

/*

*/
