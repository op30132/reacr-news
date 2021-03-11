import React from 'react';
import NewsContent from './news-content';
import NewsList from './news-list';
import Category from './category';
import {getArticles, getDefaultCate} from '../services/new-service';
import WithLoading from '../hoc/loading';

const ListWithLoading = WithLoading(NewsList);
const ContentWithLoading = WithLoading(NewsContent);

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cate: ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'],
      selectedCate: getDefaultCate(),
      newsList: [],
      selectedNewsIdx: 0,
      loading: true
    };
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleNewsChange = this.handleNewsChange.bind(this);
    this.pageChange = this.pageChange.bind(this)
  }
  handleTabChange(selectedCate) {
    this.setState({
      selectedCate: selectedCate
    });
  }
  handleNewsChange(index) {
    this.setState({
      selectedNewsIdx: index
    });
  }
  pageChange(diff) {
    if((this.state.selectedNewsIdx===0 && diff===-1) || (this.state.selectedNewsIdx === this.state.newsList.length && diff===1)) return;
    this.setState((state) => ({
      selectedNewsIdx: state.selectedNewsIdx+diff
    }))
  }
  componentDidMount() {
    this.loadData();
  }
  async loadData() {
    this.setState({ loading: true });
    const list = await getArticles()
    this.setState({
      loading: false,
      newsList: list
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.loadData();
    }
  }
  render() {
    return (
      <div>
        <section>
          <div className="tabs is-centered is-boxed is-medium">
            <ul>
              <Category 
                category={this.state.cate}
                onTabChange={this.handleTabChange}
                selected={this.state.selectedCate}
              ></Category>
            </ul>
          </div>
        </section>
        <section>
          <div className="container is-fluid  columns">
            <div className="column is-4">
              <section name="news-list">
                <ListWithLoading 
                  isLoading={this.state.loading}
                  newsList={this.state.newsList} 
                  selectedNewsIdx={this.state.selectedNewsIdx}
                  handleNewsChange={this.handleNewsChange}></ListWithLoading>
              </section>
            </div>
            <div className="column is-8">
              <section name="news-content">
                <ContentWithLoading 
                  isLoading={this.state.loading}
                  content={this.state.newsList[this.state.selectedNewsIdx]}
                  pageChange={this.pageChange}
                ></ContentWithLoading>
              </section>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Main;