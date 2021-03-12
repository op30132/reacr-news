import { useReducer, useCallback } from "react";
import reducer, { initialState } from "./reducer";
import { fetching, success, error } from "./actionCreator";

const useApiRequest = (endpoint) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const makeRequest = useCallback(async () => {
    dispatch(fetching());
    try {
      const response = await fetch(endpoint).then(res => res.json());;
      dispatch(success(response));
    } catch (e) {
      dispatch(error(e));
    }
  }, [endpoint]);

  return [state, makeRequest];
};

export default useApiRequest;
