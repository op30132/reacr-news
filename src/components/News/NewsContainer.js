import React, { useContext, useState, useCallback, useEffect, } from 'react';

import { ParamsContext } from '../../context/params-context';
import useApiRequest from "../../hook/news/useApiRequest";
import NewsContent from './NewsContent';
import NewsPanel from './NewsPanel';

const NewsContainer = () => {
  const [params] = useContext(ParamsContext);
  const [selectedNewsIdx, setSelectedNewsIdx] = useState(0);
  const { status, response, makeRequest } = useApiRequest();

  useEffect(() => {
    makeRequest(params)
  }, [makeRequest, params])

  const onPageChange = useCallback((diff) => {
    if ((selectedNewsIdx === 0 && diff === -1) || (selectedNewsIdx === response.articles.length && diff === 1)) return;
    setSelectedNewsIdx(selectedNewsIdx + diff)
  }, [response, selectedNewsIdx])

  return (
    <div className="container is-fluid columns">
      <div className="column is-4">
        <NewsPanel
          status={status}
          articles={response.articles}
          selectedNewsIdx={selectedNewsIdx}
          handleNewsChange={setSelectedNewsIdx}
        />
      </div>
      <div className="column is-8">
        <NewsContent
          status={status}
          content={response.articles[selectedNewsIdx]}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  )
}

export default NewsContainer
