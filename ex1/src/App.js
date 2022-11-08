import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyComponent from "./MyComponent";
import './App.css';

function App() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  return (
    root.render (
      <Router>
        <Routes>
          <Route path="/" element={<MyComponent></MyComponent>} />
        </Routes>
      </Router>

    )
  );
}

export default App;
