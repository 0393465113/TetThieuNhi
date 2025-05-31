import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MessagesPage from './pages/MessagesPage ';
import MemoriesPage from './pages/MemoriesPage';
import MiniGamePage from './pages/MiniGamePage ';
import PromisesPage from './pages/PromisesPage ';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-100 to-pink-100">
        <Header />
        <Navbar />
        <main className="flex-grow container mx-auto p-4 md:p-8"> {/* Thêm padding cho mobile, tăng lên cho tablet/desktop */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/memories" element={<MemoriesPage />} />
            <Route path="/game" element={<MiniGamePage />} />
            <Route path="/promises" element={<PromisesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;