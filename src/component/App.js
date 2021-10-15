import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import AddCard from "./AddCard"
import Card from "./Card"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/addCard" component={AddCard} />
        <Route path="/" component={Card} />
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default App
