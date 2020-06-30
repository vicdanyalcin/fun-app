import React from "react";
// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Quiz from "./Quiz";

const Nav = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="./">
        <h2 className="font-italic">Etymology quiz</h2>
      </a>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search words..."
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};

function App() {
  return (
    <div className="App">
      <Nav />
      <Quiz />
    </div>
  );
}

export default App;
