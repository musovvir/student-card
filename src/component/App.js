import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import ListCard from "./ListCard"
import AddCard from "./AddCard"
import Card from "./Card"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/addCard" component={AddCard} />
        <Route path="/card" component={Card} />
        <Route path="/" component={ListCard} />
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default App
