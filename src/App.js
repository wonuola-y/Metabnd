import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Strip from "./components/Strip";
import Place from "./components/Place";
import Nft from "./components/Nft";
import Footer from "./components/Footer";
import Error from "./components/Error";
import PTS from "./components/PTS";
import { Route, Routes } from "react-router-dom";
import Community from "./components/Community";

function Home() {
  return (
    <>
      <Hero />
      <Strip />
      <Place />
      <Nft />
    </>
  );
}
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Navbar" element={<Navbar />} />
        <Route path="*" element={<Error />} />
        <Route path="/Nft" element={<Nft />} />
        <Route path="/Place" element={<Place />} />
        <Route path="/PTS" element={<PTS />} />
        <Route path="/Community" element={<Community />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
