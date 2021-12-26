// EmployeeCard.jsx
import React from "react";
import "./EmployeeContainer.scss";
import EmployeeCard from "../components/employeecard/EmployeeCard";

const EmployeeContainer = (props) => {
  const { EmployeeCardArr } = props;

  const employeCards = EmployeeCardArr.map((employee, index) => {
    return (
      <div className="employee">
        <EmployeeCard key={index} name={employee.name} role={employee.role} />
      </div>
    );
  });

  return <div className="employee__container">{employeCards}</div>;
};

export default EmployeeContainer;
