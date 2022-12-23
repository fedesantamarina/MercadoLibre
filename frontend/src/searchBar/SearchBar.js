import React from "react";
import { useNavigate } from "react-router-dom";
import { CategoryContext } from "../CategoryContext";
import "./SearchBar.scss";

function SearchBar() {
  const { setCategories, setProducts } = React.useContext(CategoryContext);
  const [search, setSearch] = React.useState("");
  const navigate = useNavigate();
  const execSearch = () => {
    if (search.trim() !== "") {
      navigate("/items?search=" + search);
      setCategories([]);
      setSearch("");
      setProducts({});
    }
  };
  return (
    <div className="searchBar">
      <div className="container">
        <img
          src={require("./logo.png")}
          alt="Mercado Libre"
          className="logo"
          onClick={() => {
            navigate("/");
            setCategories([]);
            setSearch("");
            setProducts({});
          }}
        />
        <input
          type="search"
          placeholder="Nunca dejes de buscar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              execSearch();
            }
          }}
        />
        <button className="searchButton">
          <img
            src={require("./lupa.png")}
            alt="Buscar"
            className="lupa"
            onClick={() => {
              execSearch();
            }}
          />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
