import "./i18n";
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/layouts/Navbar";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<div>home</div>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
