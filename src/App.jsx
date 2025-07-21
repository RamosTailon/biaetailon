//IMPORTS
import { BrowserRouter, Routes, Route } from "react-router-dom";

// CSS
import "./App.css";

//LAYOUTS
import NavBar from "./Layouts/NavBar";
import Container from "./Layouts/Container";
import Footer from "./Layouts/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Container />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
