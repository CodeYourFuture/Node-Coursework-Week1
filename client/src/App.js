// import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="App">
      <Header />
      <QuoteArea data={data} />
    </div>
  );
}

const QuoteArea = (props) => {
  return (
    <div>
      <p>{props.data.quote}</p>
      <span>{props.data.author}</span>
    </div>
  );
};

export default App;
