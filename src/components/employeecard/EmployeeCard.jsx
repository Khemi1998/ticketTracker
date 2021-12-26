// EmployeeCard.jsx
import React from "react";
import "./EmployeeCard.scss";
import Counter from "../counter/Counter";

const EmployeeCard = (props) => {
  const { name, role } = props;

  return (
    <>
      <h2 className="EmployeeCard__employee__name">{name}</h2>
      <h3>{role}</h3>
      <Counter />
    </>
  );
};

export default EmployeeCard;
