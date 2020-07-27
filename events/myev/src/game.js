import React from "react";
import Card from "./card"

const Game = (props) => {
   console.log(props)

    return(
        <div className='game'>
            <div className='table'>
                {props.current ? (<h2>The choosen card is {props.current}</h2>) : (<h3>Choose one card</h3>)}

            </div>
            <div className='cards'>
                {props.data.map( (cardItem) => <Card item={cardItem} chooseCard={props.chooseCard}/>)}
            </div>

        </div>
    )
    

}

export default Game