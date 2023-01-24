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
    console.log(number);
    console.log(+Array.from);
    console.log(Array.from('foo'));
    // Expected output: Array ["f", "o", "o"]
    console.log(Array.from([1, 2, 3], x => x + x));
    // Expected output: Array [2, 4, 6]
    console.log(+Array.from(number.toString()).reverse().join(""))
    return +Array.from(number.toString()).reverse().join("") 
}

console.log(reverseNumber(number));
console.log(reverseNumber2(number));