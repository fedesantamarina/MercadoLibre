import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { CategoryContext } from "../CategoryContext";
import { getProducts } from "../services/product";
import "./List.scss";
const List = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");

  const { setCategories, setProducts, products } =
    React.useContext(CategoryContext);
  React.useEffect(() => {
    async function fetchData() {
      const jsonData = await getProducts(query);
      setProducts(jsonData);
      if (jsonData && jsonData.categories) {
        setCategories(jsonData.categories);
      }
    }
    fetchData();
  }, [query]);

  return (
    <div className="list">
      <div className="envelope">
        <Breadcrumb></Breadcrumb>
        <div className="results">
          {products.items &&
            products.items.map((item) => (
              <div key={item.id} className="item">
                <div className="image">
                  <Link to={`/items/${item.id}`}>
                    <img src={item.picture} alt={item.title} />
                  </Link>
                </div>
                <div className="info">
                  <div className="price">
                    {new Intl.NumberFormat("es-AR", {
                      style: "currency",
                      currency: item.price ? item.price.currency : "ARS",
                      minimumFractionDigits: item.price.decimals,
                    }).format(item.price ? item.price.amount : 0)}

                    <span>
                      {item.free_shipping && (
                        <img
                          src={require("./freeShipping.png")}
                          alt="Envío gratis"
                          className="freeShipping"
                        />
                      )}
                    </span>
                  </div>
                  <div className="title">
                    <Link to={`/items/${item.id}`}>{item.title}</Link>
                  </div>
                  <div className="location">{item.location}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default List;
