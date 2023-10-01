import React, { useState, useEffect } from "react";

function Stock() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/stocks") // Adjust the URL based on your json-server setup
      .then((response) => response.json())
      .then((data) => setStocks(data.stocks));
  }, []);

  return (
    <div>
      {stocks.map((stock) => (
        <div key={stock.id} className="card">
          <div className="card-body">
            <h5 className="card-title">{stock.name}</h5>
            <p className="card-text">Stock Price: ${stock.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Stock;
