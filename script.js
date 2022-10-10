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
   
   convertToRoman(36);

//commit text

