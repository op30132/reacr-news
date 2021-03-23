import React, { useContext, useCallback, useMemo } from 'react';

import { ParamsContext } from '../../context/params-context';
import { getCateList } from '../../services/new-service';

const Categories = () => {
  const [state, dispatch] = useContext(ParamsContext);

  const categories = useMemo(() => getCateList(), [])

  const onTabChange = useCallback((cate) => dispatch({
    type: "UPDATE",
    payload: { category: cate }
  }), [dispatch]);

  return (
    <div className="tabs is-centered is-boxed is-medium">
      <ul>
        {
          categories.map((item, i) => (
            <li key={i} className={state.category === item ? 'is-active' : ''}>
              <a href="/#" onClick={() => onTabChange(item)}>
                <span>{item}</span>
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Categories;
