import React, { useMemo } from 'react'

import { FETCHING, SUCCESS, ERROR } from "../../hook/news/actionTypes";
import calcPublishAt from '../../pipe/publishAt';

const NewsContent = ({ status, content, onPageChange }) => {
  const publishAt = useMemo(() => content ? calcPublishAt(content.publishedAt) : '', [content])

  return (
    <div className='news-content'>
      {status === FETCHING && (
        <p>Fetching...</p>
      )}
      {status === SUCCESS && (content ?
        <div className="card">
          <div className="card-image">
            <figure className="image is-256x256">
              {content.urlToImage ? <img src={content.urlToImage} alt="can't present" /> : ''}
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{content.title}</p>
                <a href="/#" className="subtitle is-6">{content.author}</a> <a href="/#" className="ml-3">{publishAt}</a>
              </div>
            </div>
            <div className="content">
              {content.content}
              <br />
            </div>
          </div>
          <nav className="level">
            <p className="level-item has-text-centered">
              <button className="button is-link" onClick={() => onPageChange(-1)}>Previous</button>
            </p>
            <p className="level-item has-text-centered">
              <a href="/#" className="button is-primary" target="_blank">Article Link</a>
            </p>
            <p className="level-item has-text-centered">
              <button className="button is-link" onClick={() => onPageChange(1)}>Next</button>
            </p>
          </nav>
        </div>
        :
        <p>No data</p>
      )}
      {status === ERROR && (
        <p>error, please retry</p>
      )}
    </div>
  )
}

export default NewsContent
