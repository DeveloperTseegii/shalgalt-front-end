import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Posts from "../src/components/Posts";
import AddPost from "./components/Modal";

function App() {
  const [rendered, setRendered] = useState(false);
  return (
    <div className="App">
      <Posts render={[rendered, setRendered]} />
    </div>
  );
}

export default App;
