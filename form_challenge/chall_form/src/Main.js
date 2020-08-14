import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home"
import Box from "./boxForm";

const Main = () => {
    return (
        <main className="main">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/chat" component={Box} />
            </Switch>
        </main>    
    )
}

export default Main