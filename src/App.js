import './App.css';
import 'bulma/css/bulma.css'
import React from 'react';
import Header from './components/header';
import Main from './components/main';
import { ParamsContextProvider } from './reducer/newsReducer';


class App extends React.Component {
  render() {
    return (
      <div>
        <ParamsContextProvider>
          <section name="header">
            <Header></Header>
          </section>
          <section name="main">
            <Main></Main>
          </section>
        </ParamsContextProvider>
      </div>
    );
  }
}

export default App;
