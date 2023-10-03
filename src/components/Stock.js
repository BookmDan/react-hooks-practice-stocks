import React, { useState, useEffect } from "react";


function Portfolio({ myPortfolio }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      <ul>
        {myPortfolio.map((stock) => {
          <li key={stock.id}>{stock.name} </li>
        })}
      </ul>
    </div>
  )
}
// message
function Stock({ stock, onBuy }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{stock.name}</h5>
        <p className="card-text">Stock Price: ${stock.price}</p>
        <button onClick={() => onBuy(stock)}>Buy</button>
      </div>
    </div>
  );
}

function Stocks() {
  const [stocks, setStocks] = useState([]);
  const [myPortfolio, setMyPortfolio] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/stocks") // Adjust the URL based on your json-server setup
      .then((response) => response.json())
      .then((data) => setStocks(data.stocks));
  }, []);

  const handleBuy = (stock) => {
    setMyPortfolio((prevPortfolio) => [...prevPortfolio, stock])
  };

  return (
    <div>
      <h1>Stocks</h1>
      <div>
        {stocks.map((stock) => (
          <Stock key={stock.id} stock={stock} onBuy={handleBuy} />
        ))}
      </div>
      <hr />
      <Portfolio myPortfolio={myPortfolio} />
    </div>
  );
}

export default Stocks;
