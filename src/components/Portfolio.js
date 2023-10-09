import React from "react";

function Portfolio({ myPortfolio, onSell }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      <ul>
        {myPortfolio.map((stock) => (
          <li key={stock.id}>
            {stock.name}
            <button onClick={() => onSell(stock.id)}>Sell</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;
