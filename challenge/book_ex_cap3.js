let minimunFunction = (num1, num2) =>{
    if(num1 === num2){
        console.log('The numbers are equal!')
    } else if (num1 > num2){
        console.log(num2)
    } else{
        console.log(num1)
    }
} 

// minimunFunction(4, 5)

const isEven = (number) => {
    if(number === 0) {
        result = true
        console.log(result)
    }else if(number === 1) {
        result = false
        console.log(result)
    }else{
        result = isEven(number - 2)
        console.log('this part of the conditional')
        return result
    }
}

isEven(0)

const countBs = (string) =>{
    target = 'B'
    for (i in string){

    }
}

a = 'sara'
for (i in a){
    console.log(i)
}

// p = a.charAt('a')
// console.log(p)