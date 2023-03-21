import "./App.css";
import Nav from "./components/Nav";
import Whoami from "./components/navComponents/Whoami";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import { useEffect, useRef, useState } from "react";

function App() {
  const [toggle, settoggle] = useState(false);

  return (
    <div className="App">
      <Router>
        <Nav toggle={toggle} settoggle={settoggle} />
        <div className={toggle ? "blur" : "page"}>
          <Homepage />
        </div>
        <Routes>
          <Route path="/whoami" element={<Whoami />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
