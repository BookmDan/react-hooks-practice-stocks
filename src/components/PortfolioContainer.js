import React, { useState } from "react";
import Portfolio from "./Portfolio";

function PortfolioContainer() {
  const [myPortfolio, setMyPortfolio] = useState([]);

  const handleSell = (stockId) => {
    setMyPortfolio((prevPortfolio) =>
      prevPortfolio.filter((stock) => stock.id !== stockId)
    );
  };

  return (
    <div>
      <h2>Your Portfolio</h2>
      <Portfolio myPortfolio={myPortfolio} onSell={handleSell} />
    </div>
  );
}

export default PortfolioContainer;