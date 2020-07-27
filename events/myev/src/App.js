import React from "react";

import "./index.css";
import "./App.css"
import Game from "./game"

const cards = [
    {   
        name: "change color",
        url: "https://simg.nicepng.com/png/small/196-1963244_uno-draw-4-card-png-svg-library-uno.png" 
    },
    {  
        name: "+4",
        url: "https://ih1.redbubble.net/image.975430406.6404/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
    },
    {
        name: "+2",
        url: "https://www.ultraboardgames.com/uno/gfx/draw2.jpg"
    },
    {
        name: "one",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6ZI8O2ahXCpJLwLmk4Mytb3Wgz1k7WNR30g&usqp=CAU"
    }
]

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            card: cards,
            current_card: null,
        }
    }

    selectCard = (card) => {
        const current_card = card.name
        this.setState({ current_card });
    }

    render(){
        return (
            <div className="App">
                <Game data={this.state.card} current={this.state.current_card} chooseCard={this.selectCard}/>
            </div>
        )
    }
}

export default App