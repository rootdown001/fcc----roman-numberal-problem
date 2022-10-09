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

    
    return answer;
   }
   
   convertToRoman(36);

