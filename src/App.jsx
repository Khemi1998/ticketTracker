import "./App.scss";
import EmployeeCard from "./components/employeecard/EmployeeCard";
import team from "./data/employee";
import scroll from "./assets/images/horizontalScroll.svg";

const App = () => {
  return (
    <div className="app">
      <h1 className="ticketTracker">Ticket Tracker</h1>
      <main className="ticketTracker__cards">
        <EmployeeCard EmployeeCardArr={team} />
      </main>
      <img className="ticketTracker__scroll" src={scroll} alt="scrollIcon"/>
    </div>
  );
};

export default App;
