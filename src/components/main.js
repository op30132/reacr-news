import React from 'react';
import { Switch, Route } from 'react-router-dom'
import News from './News'
import Documents from './Documents'

const Main = () => {
  return (
    <section name="main">
      <Switch>
        <Route exact path="/" component={News} />
        <Route path="/document" component={Documents} />
      </Switch>
    </section>
  )
}

export default Main;
