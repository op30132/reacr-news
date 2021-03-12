import React from 'react';

function Category ({category, selected, onTabChange}) {
  return (
    category.map((item, i) => (
      <li key={i} className={selected === item ? 'is-active' : ''}>
        <a href="/#" onClick={() => onTabChange(item)}>
          <span>{item}</span>
        </a>
      </li>
    ))
  )
}

export default Category;