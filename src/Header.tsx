import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>Mike's Time Tracker</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="about">About</Link>
      </nav>
    </div>
  );
}

export default Header
