// VOTRE MediaSessionVous venez de réussir 5 entretiens techniques chez Google France...
// Il s'agit d'un contrat de développeur Javascript payé 6500€/mois.
// Mais lors du sixième rendez-vous, les choses commencent à se corser.

// VOS INSTRUCTIONS

// Retourner si un tableau est un sous-ensemble d'un autre tableau.

// EXEMPLES
// ['a','b', 'c'],['a', 'b'] => true
// ['a','b', 'c'],['c', 'd'] => false

const numbers = [190,5,4200,2,776]
const numbers2 = [190,5,4200,2]
function isArraySubset(parentArray, childArray){
    return childArray.every(el => parentArray.includes(el))
}

console.log(isArraySubset(numbers, numbers2))