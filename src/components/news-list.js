import React, { useState } from 'react';
function NewsList({ newsList, handleNewsChange, selectedNewsIdx }) {
  const [key, setKey] = useState('');

  return (
    <div className="panel" style={{ height: '880px', overflowY: 'auto' }}>
      <p className="panel-heading">
        News List
      </p>
      <div className="panel-block">
        <p className="control">
          <input className="input" type="text" placeholder="Keyword" value={key} onChange={e => setKey(e.target.value)} />
        </p>
      </div>
      {
        newsList.map((item, i) => {
          return (
            <div key={i} onClick={() => handleNewsChange(i)} className={`panel-block ${selectedNewsIdx === i ? 'has-background-primary' : ''}`}>
              <div className="columns">
                <div className="column is-4">
                  <figure style={{ width: 128 }}>
                    <img src={item.urlToImage} alt="can't present"></img>
                  </figure>
                </div>
                <div className={`column is-8 ${selectedNewsIdx === i ? 'has-text-white-bis' : ''}`}>
                  {item.title}
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default NewsList;