import React from 'react';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.handleTabChange = this.handleTabChange.bind(this);
  }
  handleTabChange(cate) {
    this.props.onTabChange(cate);
  }
  render() {
    const category = this.props.category;
    const selected = this.props.selected;
    return (
      category.map((item, i) => (
        <li key={i} className={this.props.selected === item ? 'is-active' : ''}>
          <a href="/#" onClick={() => this.handleTabChange(item)}>
            <span>{item}</span>
          </a>
        </li>
      ))
    )
  }
}

export default Category;