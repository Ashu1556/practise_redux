import React, { useEffect } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";

const Fetchdata = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((storedata) => {
    return storedata;
  });

  console.log(products);

  console.log(products);

  const fetchdata = async () => {
    await axios.get(`https://fakestoreapi.com/products`).then((response) => {
      const data = response.data;
      console.log(data);
      dispatch({
        type: "products",
        payload: data,
      });
    });
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className="productitem">
      {products.map((data) => {
        return (
          <Card
            category={data.category}
            title={data.title}
            image={data.image}
            price={data.price}
            rating={data.rating.rate}
          />
        );
      })}
    </div>
  );
};

export default Fetchdata;
