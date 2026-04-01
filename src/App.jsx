import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Rating from "./components/Rating";
import Tools from "./components/Tools";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";

function App() {
  const [selected, setSelected] = useState([]);
  const [tools, setTools] = useState([]);
  const [steps, setSteps] = useState([]);
  const [pricing, setPricing] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("products.json");
      const json = await res.json();
      setTools(json.products);
      setSteps(json.steps);
      setPricing(json.pricing);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar selected={selected} />
      <Hero />
      <Rating />
      <Tools tools={tools} selected={selected} setSelected={setSelected} />
      <Steps steps={steps} />
      <Pricing pricing={pricing} />
      <Workflow />
      <Footer />
    </>
  );
}

export default App;
