import "./App.css";
import StudentTable from "./Components/StudentTable";
import DrawerComponent from "./Components/DrawerComponent";

function App() {
  return (
    <div className="flex-container">
      <div className="drawer">
        <DrawerComponent />
      </div>
      <div className="content">
        <div className="heading">
          <h1 className="students">Students</h1>
          <button className="add-button">+ ADD</button>
        </div>
        <StudentTable />
      </div>
    </div>
  );
}

export default App;
