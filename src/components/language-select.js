import React from 'react';

export default function LanguageSelect ({languageList, onSelectChange}) {
  return (
    <select onChange={e => onSelectChange(e.target.value)}>
      {
        languageList.map((item, i) => (
          <option key={i} value={item.code}>{item.name}</option>
        ))
      }
    </select>
  )
}