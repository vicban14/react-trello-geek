import "./App.css";
import ListBuilder from "./components/ListBuilder";
import Lists from "./components/Lists";
import Tasks from "./components/Tasks"

function App() {
  return (
    <div className="App">
      <ListBuilder />
      <Lists />
      <Tasks />
    </div>
  );
};

export default App;
