import React, { useState } from "react";
import useFetch from "./useFetch";
import "./App.css";

function App() {
  const { data, loading, error } = useFetch("https://api.escuelajs.co/api/v1/products");

  return (
    <div className="app-container">
      <h1>Photos</h1>

      {loading && <p>Loading data...</p>}

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {data && (
        <ul className="products">
          {data.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}

// separate small component for each product
function ProductItem({ item }) {
  const [imgError, setImgError] = useState(false);

  return (
    <li className="product-item">
      {/* show image only if not errored */}
      {!imgError && (
        <img
          src={item.images[0]}
          alt={item.title}
          onError={() => setImgError(true)} // if image fails, hide it
        />
      )}
      <div>
        <h3>{item.title}</h3>
      </div>
    </li>
  );
}

export default App;
