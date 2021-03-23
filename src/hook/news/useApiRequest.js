import { useReducer, useCallback } from "react";

import reducer, { initialState } from "./reducer";
import { fetching, success, error } from "./actionCreator";
import { getNewsApi } from '../../services/new-service';

const useApiRequest = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const makeRequest = useCallback(async (params) => {
    dispatch(fetching());

    try {
      const response = await fetch(getNewsApi(params)).then(res => res.json());
      dispatch(success(response));
    } catch (e) {
      dispatch(error(e));
    }
  }, []);

  return {
    ...state,
    makeRequest
  };
};

export default useApiRequest;
