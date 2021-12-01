// Counter.jsx
import React from "react";
import "./Counter.scss";


const Counter = () => {
  return (
    <div className="EmployeeCard__counter">
      <h3>Counter</h3>
      <section className="counter__container">
        <button className="counter__buttons__increment">
          <i className="fas fa-arrow-circle-up"></i>
        </button>
        <h5 className="counter__amount">0</h5>
        <button className="counter__buttons__decrement">
          <i className="fas fa-arrow-circle-down"></i>
        </button>
      </section>
    </div>
  );
};

export default Counter;
