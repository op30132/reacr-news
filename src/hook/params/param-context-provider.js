import React, { useReducer } from 'react';
import { ParamsContext } from '../../context/params-context';
import reducer from './param-reducer';

const defaultParams = {
  country: 'us',
  category: 'Business',
  q: '',
  pageSize: 10,
  apiKey: process.env.REACT_APP_API_KEY
};

const ParamsContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, defaultParams);

  return (
    <ParamsContext.Provider value={[state, dispatch]}>
      {props.children}
    </ParamsContext.Provider>
  );
}
export default ParamsContextProvider;