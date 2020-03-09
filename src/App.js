import React from "react";
import "./App.css";
import CharacterList from "./components/CharacterList/CharacterList";
import CharacterInfo from "./components/CharacterInfo/CharacterInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className='App'>
                <Switch>
                    <Route exact path='/' component={CharacterList}></Route>
                    <Route path='/:id' component={CharacterInfo}></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
