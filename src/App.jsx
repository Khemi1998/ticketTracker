import "./App.scss";
import EmployeeCard from "./components/employeecard/EmployeeCard";
import team from "./data/employee";

const App = () => {
  return (
    <div className="app">
      <h1 className="ticketTracker">Ticket Tracker</h1>
      <main class="ticketTracker__cards">
        <EmployeeCard
          EmployeeCard_employees__name={team[0].name}
          EmployeeCard_employees__role={team[0].role}
        />
      </main>
    </div>
  );
};

export default App;
