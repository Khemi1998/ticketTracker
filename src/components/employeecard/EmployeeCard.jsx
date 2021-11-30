// EmployeeCard.jsx
import React from "react";
import "./EmployeeCard.scss";
import Counter from "../counter/Counter";

const EmployeeCard = (props) => {
    return <div class="EmployeeCard__employees">
      <h2>Name: {props.EmployeeCard_employees__name}</h2>
      <h3>Role: {props.EmployeeCard_employees__role}</h3>
      <Counter />
    </div>;
  };
  
  export default EmployeeCard;