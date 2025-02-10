import "./i18n";
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/layouts/Navbar";
import Home from "./pages/Home";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact/form" element={<ContactForm />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
