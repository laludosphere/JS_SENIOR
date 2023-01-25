// VOTRE MISSION 
// La FNAC vous charge d'une mission importante...
// Un stagiaire s'est trompé dans l'inscription au programme de fidélité FNAC+ !
// Pouvez vous rectifier le problème ?

// VOS INSTRUCTIONS
// Permuter le nom et le prénom d'un client 
// EXEMPLE
// ['Doe', 'John'] => ['John', 'Doe']

const username = ['Doe', 'John'];

function swap(username){
    return username.map(user => user).reverse();
}

// CORRECTION
 
function swap(username){ 
    return [...username].reverse();
}

console.log(swap(username));