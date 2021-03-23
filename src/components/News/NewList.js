import React from 'react'

import { FETCHING, SUCCESS, ERROR } from "../../hook/news/actionTypes";

const NewsList = ({ status, articles, handleNewsChange, selectedNewsIdx }) => {

  return (
    <div className='news-list'>
      {status === FETCHING && (
        <p>Fetching...</p>
      )}
      {status === SUCCESS && (
        articles.length > 0 ?
          articles.map((item, i) => {
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
          :
          <p>No data</p>
      )}
      {status === ERROR && (
        <p>error, please retry</p>
      )}
    </div>
  )
}

export default NewsList
