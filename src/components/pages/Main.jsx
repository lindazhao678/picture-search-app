function Main(props) {
  const { page, result, getPrevPage, getNextPage } = props;
  function card(elem) {
    return (
      <div className="card">
        <img className="card-img-top" src={elem.previewURL} alt="" />
        <div className="card-body">
          <p className="card-title">Tags: {elem.tags}</p>
          <a href={elem.largeImageURL} target="_blank" rel="noreferrer" className="btn btn-dark">
            Zoom In
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        {result.map((elem) => {
          return <div className="col-sm-3">{card(elem)}</div>;
        })}
      </div>

      <div className="row my-5">
        <div className="col-sm-3">
          <button
            className="btn btn-dark w-100"
            onClick={() => getPrevPage()}
            disabled={page === 1}
          >
            Prev Page
          </button>
        </div>
        <div className="col-sm-6 text-center">
          <h3>{page}</h3>
          </div>
        <div className="col-sm-3">
          <button
            className="btn btn-dark w-100"
            onClick={() => getNextPage()}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
