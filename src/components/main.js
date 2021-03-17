import React, { useContext } from 'react';
import Category from './category';
import { ParamsContext } from '../context/params-context';
import { getCateList } from '../services/new-service';
import NewsContainer from './news-container';

export default function Main() {
  const [state, dispatch] = useContext(ParamsContext);

  const onTabChange = (cate) => dispatch({
    type: "UPDATE",
    payload: { category: cate }
  });

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
        <NewsContainer></NewsContainer>
      </section>
    </div>
  )
}
