import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Slider from "./components/Slider";
// import banner from "./data/data.json";
import data from "./data/data.json";
import Offers from "./components/Offers";
import Heading from "./components/Heading";

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
    </Router>
  );
}

export default App;
