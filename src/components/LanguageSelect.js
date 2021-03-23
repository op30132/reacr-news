import React from 'react';

const LanguageSelect = ({ languageList, onSelectChange, selected }) => {
  
  return (
    <select value={selected} onChange={e => onSelectChange(e.target.value)}>
      {
        languageList.map((item, i) => (
          <option key={i} value={item.code}>{item.name}</option>
        ))
      }
    </select>
  )
}

export default LanguageSelect
