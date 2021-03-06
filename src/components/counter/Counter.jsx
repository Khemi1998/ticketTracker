// Counter.jsx
import React, { useState } from "react";
import "./Counter.scss";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="counter">
      <h3 className="counter__heading">Tickets</h3>
      <section className="counter__button-container">
        <button
          className="counter__button counter__button--increment"
          onClick={handleIncrement}
        >
          <i className="fas fa-arrow-circle-up"></i>
        </button>
        <h5 className="counter__amount">{counter}</h5>
        <button
          className="counter__button counter__button--decrement"
          onClick={handleDecrement}><i className="fas fa-arrow-circle-down"></i>
        </button>
      </section>
    </div>
  );
};

export default Counter;
