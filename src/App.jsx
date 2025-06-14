import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import RecentPostPage from './pages/RecentPostPage'
import MembershipPage from './pages/MembershipPage';
import Search from './components/search/search';
const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<> <HomePage /> <Footer/> </>} />
          <Route path="/recentpost" element={<RecentPostPage/>} />
          <Route path="/membership" element={<MembershipPage/>} />
           <Route path="/search" element={<Search/>} />/
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default App;