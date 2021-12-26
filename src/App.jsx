import "./App.scss";
import team from "./data/employee";
import scroll from "./assets/images/horizontalScroll.svg";
import EmployeeContainer from "./containers/EmployeeContainer";

const App = () => {
  return (
    <div className="app">
      <h1 className="ticketTracker">Ticket Tracker</h1>
      <main className="ticketTracker__cards">
        <EmployeeContainer EmployeeCardArr={team} />
      </main>
      <img className="ticketTracker__scroll"src={scroll} alt="scrollIcon"/>
    </div>
  );
};

export default App;
