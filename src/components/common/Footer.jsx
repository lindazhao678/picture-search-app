import React from "react";
function Footer(props) {
  function changeWhite() {
    document.querySelector("body").style.backgroundColor = "white";
  }

  function changeBlack() {
    document.querySelector("body").style.backgroundColor = "black";
  }

  return (
    <footer className="mt-2 text-center p-3">
      <div>
        <button
          className="btn btn-white"
          onClick={() => {
            changeWhite();
          }}
        >
          White
        </button>
        <button
          className="btn btn-dark"
          onClick={() => {
            changeBlack();
          }}
        >
          Dark
        </button>
      </div>
      Pixel App &copy; 2021
    </footer>
  );
}
export default Footer;
