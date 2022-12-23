import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { getProduct } from "../services/product";
import "./Product.scss";
const Product = () => {
  const { id } = useParams();
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    async function fetchData() {
      const jsonData = await getProduct(id);
      setData(jsonData);
    }
    fetchData();
  }, [id]);

  return (
    <div className="product">
      {data.item ? (
        <div className="envelope">
          <Breadcrumb></Breadcrumb>
          <div className="productInfo">
            <div className="left">
              <div className="image">
                <img
                  src={
                    data.item.picture
                      ? data.item.picture
                      : require("./noImage.png")
                  }
                  alt={data.item.title ? data.item.title : ""}
                />
              </div>
              <div className="description">
                <div className="title">Descripción del producto</div>
                <div className="text">
                  {data &&
                    data.description &&
                    data.description.split("\n").map((line, i) => {
                      if (line !== "") return <p key={i}>{line}</p>;
                      else return null;
                    })}
                </div>
              </div>
            </div>
            <div className="right">
              <div className="info">
                <div className="condition">
                  {data.item.condition === "new" ? "Nuevo" : "Usado"} -{" "}
                  {data.item.sold_quantity ? data.item.sold_quantity : 0}{" "}
                  vendidos
                </div>
                <div className="title">{data.item.title}</div>
                <div className="price">
                  {new Intl.NumberFormat("es-AR", {
                    style: "currency",
                    currency: data.item.price
                      ? data.item.price.currency
                      : "ARS",
                    minimumFractionDigits: data.item.price
                      ? data.item.price.decimals
                      : 0,
                  }).format(data.item.price ? data.item.price.amount : 0)}
                </div>
                <div className="buy">
                  <button>Comprar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="loading"></div>
      )}
    </div>
  );
};
export default Product;
