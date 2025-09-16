import useFetch from "./useFetch";
import "./App.css";

function App() {
  const { data, loading, error } = useFetch("https://api.escuelajs.co/api/v1/products");

  return (
    <div className="app-container">
      <h1>Photos</h1>

      {loading && <p>Loading data...</p>}

      {error && <p>Error: {error}</p>}

      {data && (
        <ul className="products">
          {data.map((item) => (
            <li key={item.id} className="product-item">
              <img src={item.images[0]} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
