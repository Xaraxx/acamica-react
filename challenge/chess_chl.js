const chessLine = (char1, char2, size) => {
    let line = ''
    for (let i = 1; i <= size; i++) {
        let pair = i % 2
        if (pair === 0){
            line += char1
        }else{
            line += char2
        }
    }
    return line
}

const chessBoard = (size) => {
    for (let i = 1; i <= size; i++){
        let pair = i % 2  
        if (pair === 0){
            console.log(chessLine('#',' ', size))
        }else{
            console.log(chessLine(' ','#', size))
        }
    }    
}




chessBoard(8)

