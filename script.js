//La fonction doit prendre n en paramètre et retourner answer[]

// const FizzBuzz = (n) => {
//     let answer = [];

//     for (let i = 1; i <= n; i++) {

//         if (i%3===0 && i%5===0) {
//             answer.push('FizzBuzz');
//         }
//         else if (i%3 == 0 && i%5!=0) {
//         answer.push('Fizz');
//         }
//         else if (i%5 == 0 && i%3!=0) {
//         answer.push('Buzz');
//         }
//         else{
//             answer.push(i.toString())
//         }

//     }

//     return answer;
// }

// console.log(FizzBuzz(5))


// Function TwoSum prend 2 paramètres : un nombre cible et une liste de nombre.
// Boucle pour parcourrir les nombres du tableau.
// Calculer le chiffre manquant pour atteindre la cible
// Si j'ai trouvé le reste : return la solution
// Sinon garder le nombre de coté
// /!\ retourner les postions dans le tableau, pas les nombres eux mêmes.

const twoSum = (numbers,target) => {
    const usedNumers = {}; // objet vide pour stocker les nombres déjà utilisés. mieux car clé /valeur !

    for(let i=0; i<numbers.length;i++) { // Parcourir les nombres 
        const substract = target - numbers[i]; // soustraction pour trouver les nombres qu'il manque pour arriver à target. 
                                              // En suite on peut chercher le "reste"
        
        if (substract in usedNumers){ // si on a déjà vu le nombre, on a trouvé le nombre manquant
            return [usedNumers[substract],i];
        }

        usedNumers[numbers[i]] = i; // sinon je garde le nombre de coté dans les nombres déjà utilisés.
        
    }

}


// const numbers = [2, 7, 11, 15];
// const target = 9;

const numbers = [3, 2, 4]
const target = 6
twoSum(numbers, target);

// const numbers = [3, 3]
// const target = 6
// twoSum(numbers, target);

console.log(twoSum(numbers, target))