import { useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/main";
import "./components/main/main";
import "./App.css";
import "./components/sass/main.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
