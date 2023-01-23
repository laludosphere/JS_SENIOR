// VOTRE MISSION 

// La NASA lance un appel d'offre : 
// Leur nouveau projet "Le Google des Etoiles" souffre d'un backend défectueux.
// Acceptez-vous d'utiliser vos compétences de codeur pour aider la NASA ? 

// VOS INSTRUCTIONS

// Retourner un objet avec des clefs sans le préfixe "@data".charAt
// EXEMPLES 
// {"@data.id":123} => {id:123}

const strangeUser = {
    "@data.id": 123, 
    "@data.username": "John Doe",
    "@data.email": "john.doe@acme.com"
}

function sanitizer(strangeUser){
    const user = Object.entries(strangeUser).map(([key,value])=>[key.replace('@data.',""), value]);
    return Object.fromEntries(user);
}

console.log(sanitizer(strangeUser));