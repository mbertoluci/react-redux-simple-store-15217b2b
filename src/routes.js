import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Main from "./components/Main"
import StepOne from "./components/StepOne"

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />          
        <Route path="/stepone" component={StepOne} />        
      </Switch>
    </BrowserRouter>
  )
}
