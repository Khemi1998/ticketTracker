import "./App.scss";
import team from "./data/employee";
import scroll from "./assets/images/horizontalScroll.svg";
import EmployeeContainer from "./containers/EmployeeContainer";

const App = () => {
  return (
    <div className="app">
      <h1 className="tickettracker__heading">Ticket Tracker</h1>
      <main className="tickettracker__cards">
        <EmployeeContainer EmployeeCardArr={team} />
      </main>
      <img className="tickettracker--scroll"src={scroll} alt="scrollIcon"/>
    </div>
  );
};

export default App;
