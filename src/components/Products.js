import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts, STATUSES } from "../store/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  //   const [products, setProducts] = useState([]);

  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   setProducts(data);
    // };
    // fetchProducts();
    dispatch(fetchProducts());
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status == STATUSES.LOADING) return <h2>Loading...</h2>;
  if (status == STATUSES.ERROR) return <h2>Something went wrong...</h2>;

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img
            src={
              product.image
                ? product.image
                : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fstock-photo%2Flive_demo.html&psig=AOvVaw3WcH6DxMZD-2uQPig4CERb&ust=1675434289468000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOjfsJ-F9_wCFQAAAAAdAAAAABAI"
            }
            alt=""
          />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn" onClick={() => handleAdd(product)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
