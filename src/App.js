import "./App.css";
import Counter from "./Component/Counter";
import Fetchdata from "./Component/Fetchdata";
import Inputcomponent from "./Component/Inputcomponent";
import { useContext } from "react";
import { Authorization } from "./Component/Context_api/context";

import { Route, Routes } from "react-router-dom";
import Home from "./Component/Page/Home";
import About from "./Component/Page/About";
import Nav from "./Component/Page/Nav";
import Login from "./Component/Page/Login";

import { Navigate } from "react-router-dom";

function App() {
  const { isLoggedIn } = useContext(Authorization);
  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <Nav />

          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/product" element={<Fetchdata />} />
          </Routes>
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
