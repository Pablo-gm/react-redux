import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
        <nav className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container">
                <Link to={"/"} className="navbar-brand ml-5">
                    React Redux Contact Book
                </Link>
            </div>
        </nav>
    </div>
  );
};

export default Navbar;
