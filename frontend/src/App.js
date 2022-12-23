import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import List from "./list/List";
import Product from "./product/Product";
import SearchBar from "./searchBar/SearchBar";
function App() {
  return (
    <div className="App">
      <SearchBar />
      <Routes>
        <Route path="/" index element={<></>} />
        <Route path="/items" exact element={<List />} />
        <Route path="/items/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
