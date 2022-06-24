function Main(props) {
  const { page, result, getPrevPage, getNextPage, loading } = props;

  function card(elem) {
    return (
      <div className="card border border-secondary">
        <img className="card-img-top" src={elem.previewURL} alt="" />
        <div className="card-body">
          <p className="card-title">Tags: {elem.tags}</p>
          <a
            href={elem.largeImageURL}
            target="_blank"
            rel="noreferrer"
            className="btn btn-link text-dark"
          >
            Zoom In {">>"}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      {loading && (
        <div className="text-center pt-5">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div className="row">
        {result.map((elem) => {
          return <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-3">{card(elem)}</div>;
        })}
      </div>

      <div className="row my-5">
        <div className="col-5 col-lg-3">
          <button
            className="btn btn-dark w-100"
            onClick={() => getPrevPage()}
            disabled={page === 1}
          >
            Prev Page
          </button>
        </div>
        <div className="col-2 col-lg-6 text-center">
          <h3>{page}</h3>
        </div>
        <div className="col-5 col-lg-3">
          <button className="btn btn-dark w-100" onClick={() => getNextPage()}>
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
