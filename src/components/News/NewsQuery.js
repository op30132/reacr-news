import React, { useContext, useState, useCallback } from 'react';
import { ParamsContext } from '../../context/params-context';
import { debounce } from '../../tool/debounce';

const NewsQuery = () => {
  const [params, dispatch] = useContext(ParamsContext);
  const [queryString, setQueryString] = useState(params.q)

  const debouncedDispatch = useCallback(debounce((q) => dispatch({
    type: "UPDATE",
    payload: { q }
  }), 1000) , [dispatch])

  const onKeyChange = useCallback((e) => {
    setQueryString(e.target.value)
    debouncedDispatch(e.target.value)
  }, [debouncedDispatch])

  return (
    <div className="panel-block">
      <p className="control">
        <input className="input" type="text" placeholder="Keyword" value={queryString} onChange={onKeyChange} />
      </p>
    </div>
  )
}

export default NewsQuery
