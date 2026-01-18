import { Routes, Route } from "react-router-dom";
import { HistoryRouter } from "redux-first-history/rr6";
import { history } from "./store";
import "./App.css";
import Main from "./pages/Main";
import About from "./pages/About";
import Hotels from "./pages/Hotels";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <HistoryRouter history={history} basename="/booking-app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </main>
      <Footer />
    </HistoryRouter>
  );
}

export default App;
