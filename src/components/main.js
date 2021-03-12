import React, { useContext, useEffect, useState } from 'react';
import NewsContent from './news-content';
import NewsList from './news-list';
import Category from './category';
import useApiRequest from "../hook/news/useApiRequest";
import { ParamsContext } from '../context/params-context';
import { FETCHING, SUCCESS, ERROR } from "../hook/news/actionTypes";
import { getNewsApi, getCateList } from '../services/new-service';
import {debounce} from '../tool/debounce';
function Main() {
  const [state, dispatch] = useContext(ParamsContext);
  const [selectedNewsIdx, setSelectedNewsIdx] = useState(0)
  const [{ status, response }, makeRequest] = useApiRequest(getNewsApi(state));

  const pageChange = (diff) => {
    if ((selectedNewsIdx === 0 && diff === -1) || (selectedNewsIdx === response.articles.length && diff === 1)) return;
    setSelectedNewsIdx(selectedNewsIdx + diff)
  }
  const onTabChange = (cate) => dispatch({
    type: "UPDATE",
    payload: { category: cate }
  });

  const onKeyChange = debounce((e) => dispatch({
    type: "UPDATE",
    payload: { q: e.target.value }
  }), 1000)

  useEffect(() => { makeRequest() }, [state]);

  return (
    <div>
      <section>
        <div className="tabs is-centered is-boxed is-medium">
          <ul>
            <Category
              category={getCateList()}
              onTabChange={onTabChange}
              selected={state.category}
            ></Category>
          </ul>
        </div>
      </section>
      <section>
        <div className="container is-fluid  columns">
          <div className="column is-4">
            <section name="news-list">
              <div className="panel" style={{ height: '880px', overflowY: 'auto' }}>
                <p className="panel-heading">
                  News List
                </p>
                <div className="panel-block">
                  <p className="control">
                    <input className="input" type="text" placeholder="Keyword" onChange={onKeyChange} />
                  </p>
                </div>
                {status === FETCHING && (
                  <p>Fetching...</p>
                )}
                {status === SUCCESS && (
                  response.articles.length > 0 ? 
                  <NewsList
                    newsList={response.articles}
                    selectedNewsIdx={selectedNewsIdx}
                    handleNewsChange={setSelectedNewsIdx}></NewsList> 
                  : <p>No data</p>
                )}
                {status === ERROR && (
                  <p>error, please retry</p>
                )}
              </div>
            </section>
          </div>
          <div className="column is-8">
            <section name="news-content">
              {status === FETCHING && (
                <p>Fetching...</p>
              )}
              {status === SUCCESS && (
                response.articles.length > 0 ? 
                <NewsContent
                  content={response.articles[selectedNewsIdx]}
                  pageChange={pageChange}
                ></NewsContent> : 
                <p>No data</p>
              )}
              {status === ERROR && (
                <p>error, please retry</p>
              )}

            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Main;