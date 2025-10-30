import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="grow flex items-center justify-center bg-background">
          <Routes>
            <Route path="/" element={<Navigate to="/" replace />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
