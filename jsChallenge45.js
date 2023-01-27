// VOTRE MISSION 
// L'UNICEF vous a chargé d'une mission, vous devez répartir équitablement 
// l'aide alimentaire qui sera destiné aux enfants de différents pays !

// VOS INSTRUCTIONS

// Retourner un tableau qui regroupe plusieurs sous-tableaux de taille variable.INSTRUCTIONS
// EXEMPLES

// ['🍎','🍎','🍎' ], 1 => [['🍎'],['🍎'],['🍎']]
// ['🍎','🍎','🍎' ], 2 => [['🍎','🍎'],['🍎']]
// ['🍎','🍎','🍎' ], 3 => [['🍎','🍎','🍎']]


const apples = ['🔥','🍎','🍎','🍎','🍎','🍎', '🔥' ];

function chunkApples(apples, quantity){
    return apples.reduce((chunkApples, apples, index) =>{
        const chunk = Math.floor(index/quantity);
        chunkApples[chunk] = [].concat((chunkApples[chunk]||[]), apples);
        return chunkApples
    }, [])
}



console.log(chunkApples(apples, 3))