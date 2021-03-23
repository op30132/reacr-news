import React, { useCallback, useMemo, useContext } from 'react';
import { NavLink } from "react-router-dom";

import LanguageSelect from './LanguageSelect';
import { ParamsContext } from '../context/params-context';
import { getLanguageList } from '../services/new-service';

const Header = () => {
  const [state, dispatch] = useContext(ParamsContext);

  const languageList = useMemo(() => getLanguageList(), [])

  const onSelectChange = useCallback((code) => dispatch({
    type: "UPDATE",
    payload: { country: code }
  }), [dispatch])

  return (
    <section name="header">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/#">
            <img src="https://angular.io/assets/images/logos/angular/angular.png" alt="logo.png" />
            <strong>News測試機</strong>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <NavLink className="navbar-item" to="/" activeClassName="active">Home</NavLink>
            <NavLink className="navbar-item" to="/document" activeClassName="active">Documentation</NavLink>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="control is-expanded  has-icons-left pr-2">
                <div className="select is-info">
                  <LanguageSelect
                    languageList={languageList}
                    onSelectChange={onSelectChange}
                    selected={state.country}
                  />
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
    </section>
  )
}

export default Header
