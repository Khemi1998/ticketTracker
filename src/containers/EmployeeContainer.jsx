// EmployeeCard.jsx
import React from "react";
import "./EmployeeContainer.scss";
import EmployeeCard from "../components/employeecard/EmployeeCard";

const EmployeeContainer = (props) => {
  const { EmployeeCardArr } = props;

  const employeCards = EmployeeCardArr.map((employee, index) => {
    return (
      <div className="EmployeeCard__employee">
        <EmployeeCard key={index} name={employee.name} role={employee.role} />
      </div>
    );
  });

  return <div className="EmployeeCard__employees">{employeCards}</div>;
};

export default EmployeeContainer;
