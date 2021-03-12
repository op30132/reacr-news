import React from 'react';
import LanguageSelect from './language-select';
import { useContext } from 'react';
import { ParamsContext } from '../context/params-context';
import { getLanguageList } from '../services/new-service';
function Header() {
  const [state, dispatch] = useContext(ParamsContext);
  const onSelectChange = (code) => dispatch({
    type: "UPDATE",
    payload: { country: code }
  })

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/#">
          <img src="https://angular.io/assets/images/logos/angular/angular.png" alt="logo.png" />
          <strong>News測試機</strong>
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a href="/#" className="navbar-item">
            Home
          </a>
          <a href="/#" className="navbar-item">
            Documentation
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="control is-expanded  has-icons-left pr-2">
              <div className="select is-info">
                <LanguageSelect
                  languageList={getLanguageList()}
                  onSelectChange={onSelectChange}
                  selected={state.country}
                ></LanguageSelect>
              </div>
              <span className="icon is-medium is-left">
                <i className="fas fa-globe"></i>
              </span>
            </div>
            <div className="buttons">
              <a href="/#" className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a href="/#" className="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Header;