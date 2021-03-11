import React from 'react';
import LanguageSelect from './language-select';
import { useState } from 'react';

function Header() {
  const { queryParam, setQueryParam } = useParamsContext()

  const languageList = [
    { code: 'cn', name: 'China' },
    { code: 'jp', name: 'Japan' },
    { code: 'us', name: 'United States' },
  ]
  const [selectedLan, setSelectedLan] = useState(queryParam.country)

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
                  languageList={languageList}
                  onSelectChange={e => {
                    setSelectedLan(e);
                    setQueryParam({ country: e })
                  }}
                  selected={selectedLan}
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