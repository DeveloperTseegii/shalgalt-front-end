import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Lists from "./components/List";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [rendered, setRendered] = useState(false);
  return (
    <div className="App">
      <Lists render={[rendered, setRendered]} />
    </div>
  );
}

export default App;
