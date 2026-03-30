import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Rating from "./components/Rating";
import Tools from "./components/Tools";

function App() {
  const [count, setCount] = useState(0);
  const [tools, setTools] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("products.json");
      const json = await res.json();
      setTools(json.products);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Rating />
      <Tools tools={tools} />
    </>
  );
}

export default App;
