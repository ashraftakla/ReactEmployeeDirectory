import React, { useContext } from "react"; 
import "../styles/Main.css";

import DataAreaContext from "../utils/DataAreaContext";

function Nav() {
  const context = useContext(DataAreaContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <div className="search-area col-4">
       <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="name"
          aria-label="Search"
          onChange={e => context.handleSearchChange(e)}
        />
      
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon" >search</span>
      </button>
   
      </div>
    </nav>
  );
}
export default Nav;
