import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import About from "./pages/About";
import Hotels from "./pages/Hotels";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
