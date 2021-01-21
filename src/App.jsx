import "./styles/App.scss";
import ListBuilder from "./components/ListBuilder";
import Lists from "./components/Lists";
import HeaderBar from "./components/HeaderBar";

function App() {
  return (
    <section>
      <HeaderBar />
      <ListBuilder />
      <Lists />
    </section>
  );
};

export default App;
