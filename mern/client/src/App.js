import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ margin: 20 }}>
      <Routes>
        <Route exact path="/" element={<RecordList />} />
      </Routes>
      </div>
    </div>
  );
};

export default App;
