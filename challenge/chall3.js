const arr1 = [5,2,1,7,23,90]

const arr2 = [1,100,200]

const arr3 = ['pepe', 'marina', 'facundo', 'roberto', 'julia', 'romina', 'gabriela', 'javier']

const data = [
    {
        name: "Dan Abramov",
        age: 28
    },
    {
        name: "Wes Bos",
        age: 36
    },
    {
        name: "Ryan Florence",
        age: 42
    },
    {
        name: "Scott Tolinski",
        age: 33
    },
    {
        name: "Mark Zuckerberg",
        age: 35    
    },
]

const twoTimes = (array) => {
    let result = []
    result = array.map(x => x * 2);
    return(result)
}

console.log(twoTimes(arr1))

const convertingToString = (array) => {
    let result = []
    result = array.map(x => String(x))
    return(result)
}

console.log(convertingToString(arr2))

const capitalization = (array) => {
    let result = []
    result = array.map(x => {
        return x.toUpperCase()
    })
    return(result)
}

console.log(capitalization(arr3))

const printName = (data) => {
    let names = []
    names = data.map(x => {console.log(x.name)})
}

console.log(printName(data))

