import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
   return (
      <div className="App">
         <Router>
            <Navbar />
            <Routes>
               <Route index element={<Home />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;
