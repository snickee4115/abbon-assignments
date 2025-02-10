import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
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
