import publishAt from '../pipe/publishAt';
export default function NewsContent({ content, pageChange }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-256x256">
          {content.urlToImage ? <img src={content.urlToImage} alt="can't present" /> : ''}
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{content.title}</p>
            <a href="/#" className="subtitle is-6">{content.author}</a> <a href="/#" className="ml-3">{publishAt(content.publishedAt)}</a>
          </div>
        </div>
        <div className="content">
          {content.content}
          <br />
        </div>
      </div>
      <nav className="level">
        <p className="level-item has-text-centered">
          <button className="button is-link" onClick={() => pageChange(-1)}>Previous</button>
        </p>
        <p className="level-item has-text-centered">
          <a href="/#" className="button is-primary" target="_blank">Article Link</a>
        </p>
        <p className="level-item has-text-centered">
          <button className="button is-link" onClick={() => pageChange(1)}>Next</button>
        </p>
      </nav>
    </div>

  )
}