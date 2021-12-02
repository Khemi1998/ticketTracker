// EmployeeCard.jsx
import React from "react";
import "./EmployeeCard.scss";
import Counter from "../counter/Counter";

const EmployeeCard = (props) => {
  const { EmployeeCardArr } = props;

  const employeCards = EmployeeCardArr.map((employee, index) => {
    return (
      <div key={index} className="EmployeeCard__employee">
        <h2 className="EmployeeCard__employee__name">{employee.name}</h2>
        <h3>{employee.role}</h3>
        <Counter />
      </div>
    );
  });

  return <div className="EmployeeCard__employees">{employeCards}</div>;
};

export default EmployeeCard;
