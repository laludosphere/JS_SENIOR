// VOTRE MISSION 
// L'université de Cambridge a besoin d'un professeur de Computer science

// Le jour de l'entretien technique arrive...
// Et vous êtes nerveux !
// Saurez vous réussir le challenge de cette université prestigieuse? 

// VOS INSTRUCTIONS

// Retourner un nombre entier positif inversé.Computer
// EXEMPLES
// 12=>21
// 1234 => 4321

const number = 1234; 

function reverseNumber(number){
    return  parseInt(
        number
          .toString()
          .split('')
          .reverse()
          .join('')
      ) 
}
function reverseNumber2(number){
    return +Array.from(number.toString()).reverse().join("") 
}


console.log(reverseNumber(number));
console.log(reverseNumber2(number));