import './App.css';
import 'bulma/css/bulma.css'
import React from 'react';
import Header from './components/header';
import Main from './components/main';
import ParamsContextProvider from './hook/params/param-context-provider'
import { Switch, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <div>
        <ParamsContextProvider>
          <section name="header">
            <Header></Header>
          </section>
          <Switch>
            <Route exact path="/">
              <section name="main">
                <Main></Main>
              </section>
            </Route>
            <Route path="/document">
              <p>document</p>
            </Route>
          </Switch>

        </ParamsContextProvider>
      </div>
    );
  }
}

export default App;
