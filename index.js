/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votinAge=18;
if(votinAge > 18){
    console.log(true)
}
else{
    console.log(false)
}


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let varA = 15
let varB = 3
if (varB > 2){
    console.log(varA + varB)
}
else{
    console.log(varA * varB)
}





//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let string = "1999"
console.log(Number(string))




//Task d: Write a function to multiply a*b 

function multiply(a,b){
    return a * b
}



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 


function dogAge(myAge) {
    let dogYears =7*myAge;
    return dogYears
}
console.log (dogAge(41))

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function feedDog(dogWeight, dogAge){
    if(dogAge > .99) {
        if (dogWeight <= 5){
        return .05 * dogWeight
        }
        else if (dogWeight >= 6 && dogWeight <= 10){
        return 0.04 * dogWeight
        }
        else if (dogWeight >= 11 && dogWeight <= 15){
        return 0.03 * dogWeight
        }
        else if(dogWeight > 15){
        return 0.02 * dogWeight
        }
    }
    else{
        if(dogAge >= .16 && dogAge <= .03){
        return 0.1 * dogWeight
        }
        else if (dogAge >= .04 && dogAge <= .58){
        return 0.05 * dogWeight
        }
        else if(dogAge >= .59 && dogAge <= .99){
        return .04 * dogWeight
        }
    } 
}
console.log (feedDog(15, 1));




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

// function rockPaperScissors(player){
//     let computer = Math.floor(Math.random() *3);
//     if (computer === 0) {
//         choice = "rock"
//     }
//     else if (choice === 1) {
//         choice = "paper"
//     }
//     else if (choice === 2) {
//         choice = "scissors"
//     } 
//     if (player === rock) {
//         choice = 0
//     }
//     else if (choice === paper){
//         choice = 1
//     }
//     else if (choice === scissors){
//         choice = 2
//     }
//     if (computer === player){
//         console.log('Draw')
//     }
//     else if (computer === 0 && player === 2 || computer === 1 && player === 0 || computer === 2 && player === 1);{
//         console.log('You Lose')
//     }
//     else {
//         console.log('You win')
//     }
// }
// console.log(rockPaperScissors)(rock);
  
const rock = 1;
const paper = 2;
const scissors = 3;
function rps(you, computer) {  
    you == 1 && computer == 1 || you == 2 && computer == 2 || you == 3 && computer == 3 ? console.log('You tied') :
    you == 1 && computer == 2 || you == 2 && computer == 3 || you == 3 && computer == 1 ? console.log('You lose!') :
    you == 3 && computer == 2 || you == 2 && computer == 1 || you == 1 && computer == 3 ? console.log('You win!') :
    console.log(`OOPS, something went wrong!`)
    }
rps(paper,Math.floor(Math.random() * 3) )
// first number is your choice, math.floor and second parentheses are t0 calculate the computers number


/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

let kilo
    function kmConverter(kilo){
        return kilo/1.609344;
    }
console.log(kmConverter(5))

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
let ft
function ftConverter(ft){
    return ft * 30.48;
}
console.log(ftConverter(5))


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function annoyingSong(){

    for(i=99; i>0; i--){
        console.log( `${i} bottles of soda on the wall, ${i} bottles of soda, take one down, pass it around. ${i-1} bottles of soda on the wall.`)
    }
}
console.log(annoyingSong())


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  

// function gradeCalc(numGrade){
//     if(numGrade >= 90){
//         return "A";
//     }
//     else if
//     else if(numGrade >= 80 && <90){
//         return "B";
//     }
//     else if(numGrade >= 70 && < 80){
//         return "C";
//     }
//     else if(numGrade >= 60 && < 70){
//         return "D";
//     }
//     else{
//         return "F";
//     }    
// }  
// figured out why it does not work. it is else if. so if it is above 90 it would be assigned A. if not then it goes to through each else if until gets true then it returns corresponding letter. SO:

function gradeCalc(numGrade){
    if (numGrade >= 90){
        return `A`;
    }
    else if(numGrade >= 80){
        return `B`;
    }
    else if(numGrade >= 70){
        return `C`;
    }
    else if(numGrade >= 60){
        return `D`;
    }
    else{
        return `F`;
    }
}
console.log(gradeCalc(79))  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





