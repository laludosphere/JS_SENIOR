// Comment utiliser MAP REDUCE et FILTER?
// Eviter les effets de bord
// Comment je choisi entre map filter et reduce ?
// Mon tableau de sortie est différent mais fait la meme longueur ? => MAP 
// Mon tableau de sortie est plus petit en longueur ? => FILTER
// Mon tableau de sortie est une valeur ? => REDUCE



const someArr = [1,2,3,4,5];

//EXO #1
const doubleArr = someArr.map(e => e * 2);

//EXO #2
const evenArr = someArr.filter(e => e % 2 == 0);
const oddArr = someArr.filter(e => e % 2 != 0);

//EXO #3
const maxValueArr = someArr.reduce((max, e)=> Math.max(max,e));
const mnValueArr= someArr.reduce((max, e)=> Math.min(max,e));

//EXO #4
const sumValueArr = someArr.reduce((sum, e)=> sum + e);


//EXO #5
const isOddVaueArr = someArr.filter(e => e % 2 != 0).length != 0;

//EXO #6

const userList = [
    {name: "John", gender: "M", salary: 35000},
    {name: "Jade", gender: "F", salary: 42000},
    {name: "Joe", gender: "M", salary: 32000},
    {name: "Jacky", gender: "F", salary: 38000}
]

const userM = userList.filter(e => e.gender == 'M');
console.log(userM);
const userMWithMoreGold  = userM.map(e => e.salary + 1000);
console.log(userMWithMoreGold);
const userMsum = userMWithMoreGold.reduce((sum, e)=> sum + e);
console.log(userMsum);

//Correction

menSalaryTotal = userList
                    .filter(user =>user.gender == 'M')
                    .map(user => user.salary + 1000)
                    .reduce((menSalaryTotal,menSalary) => menSalaryTotal + menSalary);
console.log(menSalaryTotal);