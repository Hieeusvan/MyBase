import "./App.css";
import "./index.css";
import Details from "./Apps/AppDetails";
import Games from "./Apps/Games";
import Apps from "./Apps/Apps";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        {/* hr */}
        <Routes>
          <Route exact path="/games" element={<Games />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/games/details" element={<Details />} />
        </Routes>
        {/* hr */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
