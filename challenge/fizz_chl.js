const fizzBuzz = (startIter, endIter) => {
    for (let i = startIter; i <= endIter; i++){
        tree_divisible = i % 3
        five_divisible = i % 5
        if (tree_divisible === 0){
            console.log('Fizz');
        }
        else if (five_divisible === 0){
            console.log('Buzz')
        }
        else{
            console.log(i)
        }
    }
}

const fizzBuzz2 = (startIter, endIter) => {
    for (let i = startIter; i <= endIter; i++){
        tree_divisible = i % 3
        five_divisible = i % 5
        if (tree_divisible === 0 && five_divisible === 0){
            console.log('FizzBuzz');
        }
        else{
            console.log(i)
        }
    }
}

fizzBuzz(1, 100)
fizzBuzz2(1, 100)