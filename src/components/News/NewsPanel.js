import React from 'react';

import NewsQuery from './NewsQuery';
import NewsList from './NewList';

const NewsPanel = ({ status, articles, handleNewsChange, selectedNewsIdx }) => {

  return (
    <div name="news-panel">
      <div className="panel" style={{ height: '880px', overflowY: 'auto' }}>
        <p className="panel-heading">
          News List
        </p>
        <NewsQuery />
        <NewsList
          status={status}
          articles={articles}
          handleNewsChange={handleNewsChange}
          selectedNewsIdx={selectedNewsIdx}
        />
      </div>
    </div>
  )
}

export default NewsPanel;
