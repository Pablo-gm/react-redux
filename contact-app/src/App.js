import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer  } from "react-toastify";

import './App.css';
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

/*
<Route exact path="/" component={() => <Home />} />
<Route exact path="/add" component={() => <AddPost />} />
<Route exact path="/edit/:id" component={() => <EditContact />} />
*/
const App = () => {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>

      <Routes>
        <Route exact path="/" element={ <Home />} />
        <Route  path="/add" element={ <AddContact />} />
        <Route  path="/edit/:id" element={ <EditContact />} />
        <Route  >Broooo</Route>
      </Routes>

    </div>
  );
}

export default App;
