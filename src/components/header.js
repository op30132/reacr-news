import React from 'react';
import LanguageSelect from './language-select';
import { getDefaultLan } from '../services/new-service';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languageList: [
        { code: 'cn', name: 'China' },
        { code: 'jp', name: 'Japan' },
        { code: 'us', name: 'United States' },
      ],
      selectedLan: getDefaultLan()
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);

  }
  handleSelectChange(selectedLan) {
    this.setState({
      selectedLan: selectedLan
    });
  }
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="https://angular.io/assets/images/logos/angular/angular.png" />
            <strong>News測試機</strong>
          </a>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              Home
            </a>
            <a className="navbar-item">
              Documentation
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="control is-expanded  has-icons-left pr-2">
                <div className="select is-info">
                  <LanguageSelect 
                    languageList={this.state.languageList}
                    onSelectChange={this.handleSelectChange}
                    selected={this.state.selectedLan}
                ></LanguageSelect>
                </div>
                <span className="icon is-medium is-left">
                  <i className="fas fa-globe"></i>
                </span>
              </div>
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
export default Header;