import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Sliders from "./components/Sliders";
import HomeCards from "./components/HomeCards";
import ServicesPage from "./components/ServicesPage";
import FaqPage from "./components/FaqPage";
import AdmissionForm from "./components/AdmissionForm";


function App() {
  return (
    <div className="App">
      <Home />
      <Sliders />
      <HomeCards />
      <ServicesPage />
      <FaqPage/>
      
      
    </div>
  );
}

export default App;
