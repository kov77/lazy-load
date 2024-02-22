import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Home} from "./components/Home";
import {Test} from "./components/Test";


function App() {

  return (
    <Routes>
      <Route index element={<Home />}/>
      <Route path={"test"} element={<Test />}/>
    </Routes>
  );
}

export default App;
