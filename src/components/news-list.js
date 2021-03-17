import React from 'react';

function NewsList({ newsList, handleNewsChange, selectedNewsIdx }) {
  return (
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
  )
}

export default NewsList;