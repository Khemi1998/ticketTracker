import "./App.scss";
import EmployeeCard from "./components/employeecard/EmployeeCard";
import team from "./data/employee";

const App = () => {
  return (
    <div className="app">
      <h1 className="ticketTracker">Ticket Tracker</h1>
      <main className="ticketTracker__cards">
        <EmployeeCard EmployeeCardArr={team} />
      </main>
    </div>
  );
};

export default App;
