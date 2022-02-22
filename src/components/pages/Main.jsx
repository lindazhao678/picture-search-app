function Main(props) {
  const { page, result, getPrevPage, getNextPage } = props;
  function card(elem) {
    return (
      <div className="card">
        <img className="card-img-top" src={elem.previewURL} alt="" />
        <div className="card-body">
          <h5 className="card-title">Tags:{elem.tags}</h5>
          <p className="card-text">User:{elem.user}</p>
          <a href={elem.largeImageURL} className="btn btn-primary">
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
          console.log(elem);
          return <div className="col-sm-3">{card(elem)}</div>;
        })}
      </div>

      <div className="row">
        <div className="col-sm-3">
          <button
            className="btn btn-primary w-100"
            onClick={() => getPrevPage()}
            disabled={page === 1}
          >
            Prev
          </button>
        </div>
        <div className="col-sm-6 text-center">{page}</div>
        <div className="col-sm-3">
          <button
            className="btn btn-primary w-100"
            onClick={() => getNextPage()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
