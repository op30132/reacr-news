import React from 'react';

class LanguageSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(e) {
    this.props.onSelectChange(e.target.value);
  }
  render() {
    const languageList = this.props.languageList;
    return (
      <select onChange={this.handleSelectChange}>
        {
          languageList.map((item, i) => (
            <option key={i} value={item.code}>{item.name}</option>
          ))
        }
      </select>

    )
  }
}

export default LanguageSelect;