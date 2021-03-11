import './App.css';
import 'bulma/css/bulma.css'
import React from 'react';
import Header from './components/header';
import Main from './components/main';


class App extends React.Component {
  render(){
    return (
      <div>
        <section name="header">
          <Header></Header>
        </section>
        <section name="main">
          <Main></Main>
        </section>
      </div>
    );
  }
}
 
export default App;
