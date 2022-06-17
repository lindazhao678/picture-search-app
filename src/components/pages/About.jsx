function About() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="col-6">
          <h1 className="text-center">About</h1>
          <p className="text-muted pt-3">
            Pixel App is a react web appication for picture search. User can
            search pictures by tags. It's built with dynamic features, such as
            pagination, zoom in picture, and white/dark mode.
          </p>
          <h1 className="text-center mt-5">Techs</h1>
          <ul className="text-muted py-3">
            <li>Build the frontend with React.</li>
            <li>Build the backend wiht Express.</li>
            <li>Use Bootstrap for the styling.</li>
            <li>Use Axios library to fatch data.</li>
            <li>Use React Router DOM to implement dynamic routing.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default About;
