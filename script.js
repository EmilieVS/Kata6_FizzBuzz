//La fonction doit prendre n en paramètre et retourner answer[]

const FizzBuzz = (n) => {
    let answer = [];

    for (let i = 1; i <= n; i++) {

        if (i%3===0 && i%5===0) {
            answer.push('FizzBuzz');
        }
        else if (i%3 == 0 && i%5!=0) {
        answer.push('Fizz');
        }
        else if (i%5 == 0 && i%3!=0) {
        answer.push('Buzz');
        }
        else{
            answer.push(i.toString())
        }

    }

    return answer;
}

console.log(FizzBuzz(5))