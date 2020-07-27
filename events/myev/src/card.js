import  React from "react"

const Card = (props) =>{
    console.log(props)
    return(
        <div className="card">
            <img
                name={props.item.name}
                onClick={() => props.chooseCard(props.item)}
                src={props.item.url}
                alt={props.item.name}
            />
        </div>
    )
}

export default Card
