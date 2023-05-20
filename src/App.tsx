import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateTask from "./components/Task/createTask";
import AllTasks from "./components/Task/AllTasks";
import EditTask from "./components/Task/editTask";
import ViewTask from "./components/Task/viewTask";


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<AllTasks />} />
          <Route path="/create" element={<CreateTask />} />
          <Route path="/edit/:id" element={<EditTask />} />
          <Route path="/view/:id" element={<ViewTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
