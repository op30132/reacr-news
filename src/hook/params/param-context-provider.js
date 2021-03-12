import React from 'react';
import { ParamsContext } from '../../context/params-context';
import reducer from './param-reducer';

const defaultParams = {
  country: 'us',
  category: 'Business',
  q: '',
  pageSize: 10,
  apiKey: '5c272dc78f954b94855e059b7e2dabc2'
};

const ParamsContextProvider = props => {
  const [state, dispatch] = React.useReducer(reducer, defaultParams);

  return (
    <ParamsContext.Provider value={[state, dispatch]}>
      {props.children}
    </ParamsContext.Provider>
  );
}
export default ParamsContextProvider;