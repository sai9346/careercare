// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import MentorSearch from './components/MentorSearch';
import StudentDashboard from './components/StudentDashboard';
import MentorDashboard from './components/MentorDashboard';
import BookingForm from './components/BookingForm';
import PaymentProcessing from './components/PaymentProcessing';
import PremiumBookingPage from './components/PremiumBookingPage';
import RandomAssignmentPage from './components/RandomAssignmentPage';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<MentorSearch />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/mentor-dashboard" element={<MentorDashboard />} />
          <Route path="/book" element={<BookingForm />} />
          <Route path="/payment" element={<PaymentProcessing />} />
          <Route path="/premium-booking" element={<PremiumBookingPage />} />
          <Route path="/random-assignment" element={<RandomAssignmentPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </ThemeProvider>
);

export default App;
