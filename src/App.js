import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./components/forms/LoginPage";
import {Signup} from "./components/forms/signUpPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signuppage" element={<Signup />} />
        <Route/>
      </Routes>
    </Router>
  );
}

export default App;