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

    // calc numDig
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
    } else if (_dig >= (500)) {
        // assign D for 500+
        roman = "D";
        // loop through multiples to add C for 600, 700, 800
        multiple = Math.floor((_dig - 500)/100);
        for (let j = 0; j < multiple; j++) {
            roman += "C";
            } 
    } else if (_dig >= (400)) {
        roman = "CD";
    } else if (_dig >= (100)) {
        // assign C for 100+
        roman = "C";
        // loop through multiples to add C for 200, 3
        multiple = Math.floor((_dig - 100)/100);
        for (let j = 0; j < multiple; j++) {
            roman += "C";
            } 
    } else if (_dig >= (90)) {
        // assign XC for 90
        roman = "XC";
    } else if (_dig >= (50)) {
        // assign L for 50+
        roman = "L";
        // loop through multiples to add X for 60, 70, 80
        multiple = Math.floor((_dig-50)/10);
        for (let j = 0; j < multiple; j++) {
            roman += "X";
            }
    } else if (_dig >= (40)) {
        // assign XL for 40
        roman = "XL";
    } else if (_dig >= (10)) {
        // assign X for 10+
        roman = "X";
        // loop through multiples to add X for 20, 30
        multiple = Math.floor((_dig-10)/10);
        for (let j = 0; j < multiple; j++) {
            roman += "X";
            }
    } else if (_dig >= (9)) {
        // assign IX for 9
        roman = "IX";
    } else if (_dig >= (5)) {
        // assign V for 5
        roman = "V";
        // loop through multiples to add I for 6, 7, 8
        multiple = Math.floor((_dig-5)/1);
        for (let j = 0; j < multiple; j++) {
            roman += "I";
            }
    } else if (_dig >= (4)) {
        // assign IV for 4
        roman = "IV";
    } else  {
        // assign I for 1
        roman = "I";
        // loop through multiples to add I for 2, 3
        multiple = Math.floor((_dig-1)/1);
        for (let j = 0; j < multiple; j++) {
            roman += "I";
            }
    }

    return roman;

}

 
    // call checkIf function for thousands, hundreds, tens, ones
    fourRom =checkIf(fourDig);
    threeRom = checkIf(threeDig);
    twoRom =checkIf(twoDig);
    oneRom = checkIf(oneDig);

    // put four components of answer together  
    answer = fourRom + threeRom + twoRom + oneRom;


    // console.log(output)
    console.log(" input: " + num);
    console.log("answer: " + answer);
    
    
    // return
    return answer;
   }
   
   convertToRoman(5998);


