const { ADDRCONFIG } = require("dns");

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

    /*
    function checkSwitch(_dig) {
        let temp = "";

        switch(_dig) {
            case (_dig >= (1000 - 1)):
                temp = "M";
                console.log(temp);
                break;
            case (_dig >= (900 - 1)):
                temp = "CM";
                console.log(temp);
                break;
            default:
                console.log("hit default");
                break;

        }
        return temp

    }
    */

    // array for key / value pairs
    let arr = [
        ["M", 1000], 
        ["CM", 900],
        ["D",  500],
        ["CD", 400],
        ["C",  100],
        ["XC",	90],
        ["L",	50],
        ["XL",	40],
        ["X",	10],
        ["IX",	 9],
        ["V",    5],
        ["IV",   4],
        ["I",    1]
    ]




    // turn num into 4 diff variables for thousands, hundreds, etc
   

    fourPlaces = Math.floor(num/1000)*1000;
    threePlaces =Math.floor((num - fourPlaces)/100)*100;
    twoPlaces = Math.floor((num - fourPlaces - threePlaces)/10)*10;
    onePlaces = ((num - fourPlaces - threePlaces - twoPlaces));

    fourDig = fourPlaces + threePlaces + twoPlaces + onePlaces;
    threeDig = threePlaces + twoPlaces + onePlaces;
    twoDig = twoPlaces + onePlaces;
    oneDig = onePlaces;
  
    // check if fourDig > 0
    if (fourDig > 0) { 
        // go through arr and find first value that fourDig is greater than
        for (let i = 0; i < arr.length; i++) {
            
            if (fourDig >= (arr[i][1] - 1) && fourRom == "") {
                // define variable for how many times to add M
                
                let multiple = (fourDig + 1)/1000;
                // loop and add M for each multiple
                for (let j = 0; j < multiple; j++) {
                    fourRom += arr[i][0];
                }      
            }              
        }
    }
    

    // check if threeDig > 0
    if (threeDig > 0) { 
        // go through arr and find first value that three Dig is greater than
        for (let i = 0; i < arr.length; i++) {
                
            if (threeDig >= (arr[i][1] - 1) && threeRom == "") {

                threeRom = arr[i][0];

                if ((threeDig + twoDig + oneDig) >= 199 && threeDig < 299) {
                    threeRom += "C";
                } else if ((threeDig + twoDig + oneDig) >=299 && threeDig <399) {
                    threeRom += "CC";
                }
                else if ((threeDig + twoDig + oneDig) >= 599 && threeDig < 699) {
                    threeRom += "C";
                } else if ((threeDig + twoDig + oneDig) >= 699 && threeDig < 799) {
                    threeRom += "CC";
                } else if ((threeDig + twoDig + oneDig) >= 799 && threeDig < 899) {
                    threeRom += "CCC";
                }
                /*
                // define variable for how many times to add M 
                let multiple = Math.floor(threeDig/100);
                // loop and add value for each multiple
                for (let j = 0; j < multiple; j++) {
                    threeRom += arr[i][0];
                }
                */
                
                }      
        }              
        
    }





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

    

    // put four components of answer together
    answer = fourRom + threeRom + twoRom + oneRom;


    console.log("answer = " + answer);
    return answer;
   }
   
   convertToRoman(1999);

//commit text
/*
Add

Add logic to loop through array and find first pair where fourNum is greater than
*/

/*

*/
