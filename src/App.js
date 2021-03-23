import './App.css';
import 'bulma/css/bulma.css'
import React from 'react';
import Header from './components/Header';
import Main from './components/main';
import ParamsContextProvider from './hook/params/param-context-provider'

class App extends React.Component {
  render() {
    return (
      <ParamsContextProvider>
      <Header />
      <Main />
    </ParamsContextProvider>
    );
  }
}

export default App;
