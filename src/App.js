import "./App.css";
import Nav from "./components/Nav";
import Whoami from "./components/navComponents/Whoami";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import { useEffect, useRef, useState } from "react";

function App() {
  const [toggle, settoggle] = useState(false);
  const [classname, setclassname] = useState(toggle ? "blur" : "page");
  const ref = useRef(null);

  return (
    <div className="App">
      <Router>
        <Nav toggle={toggle} settoggle={settoggle} />
        <div className={classname} ref={ref}>
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
