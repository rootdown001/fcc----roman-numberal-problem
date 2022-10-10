const { ADDRCONFIG } = require("dns");

function convertToRoman(num) {
    
    // declare answer variable
    let answer = "";
    
    // declare variables to hold thousands, hundreds, tens and ones
    let fourDig = 0; 
    let threeDig = 0;
    let twoDig = 0;
    let oneDig = 0;
    
    // declare variables to hold Roman numerals for thousands, hundreds, tens and ones
    let fourRom = "";
    let threeRom = "";
    let twoRom = "";
    let oneRom = "";

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
    fourDig = (Math.floor(num/1000))*1000;
    threeDig = (Math.floor((num - fourDig)/100))*100;
    twoDig = (Math.floor((num - fourDig - threeDig)/10))*10;
    oneDig = (Math.floor((num - fourDig - threeDig - twoDig)));

    // check if fourDig > 0
    if (fourDig > 0) { 
        // go through arr and find first value that fourDig is greater than
        for (let i = 0; i < arr.length; i++) {
            
            if (fourDig >= (arr[i][1] - 1) && fourRom == "") {
                // define variable for how many times to add M
                let multiple = Math.floor(fourDig/1000);
                // loop and add M for each multiple
                for (let j = 0; j < multiple; j++) {
                    fourRom += arr[i][0];
                }
                    
            } 
            
              
        }
    }
    





    // console.log variables for digits
    console.log("fourDig = " + fourDig);
    console.log("threeDig = " + threeDig);
    console.log("twoDig = " + twoDig);
    console.log("oneDig = " + oneDig);
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
   
   convertToRoman(3232);

//commit text
/*
Add

Add logic to turm number into 4 variables for thousands, hundreds, etc
*/

/*
Fix

*/
