import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import Genshin from "./pages/Genshin.tsx"; 
import StarRail from "./pages/StarRail.tsx";
import Arknights from "./pages/Arknights.tsx"; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genshin" element={<Genshin />} />
        <Route path="/starrail" element={<StarRail />} />
        <Route path="/arknights" element={<Arknights />} />
      </Routes>
    </Router>
  );
}

export default App;