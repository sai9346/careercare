import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MentorSearch from './MentorSearch';
import BookingForm from './BookingForm';
import BookingConfirmation from './BookingConfirmation';
import PremiumBookingPage from './PremiumBookingPage';
import RandomAssignmentPage from './RandomAssignmentPage';
import styled from 'styled-components';
import { getMentors, bookSession } from '../hooks/api'; // Ensure this import matches your actual file structure

const DashboardContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f0f4f8;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const StudentDashboard = () => {
  const [booking, setBooking] = useState(null);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [mentors, setMentors] = useState([]);
  const [areaOfInterest, setAreaOfInterest] = useState('');
  const [studentDetails, setStudentDetails] = useState({ name: '', email: '' });
  const [randomMentorAssignment, setRandomMentorAssignment] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const data = await getMentors();
        setMentors(data);
      } catch (error) {
        console.error('Failed to fetch mentors:', error);
      }
    };
    fetchMentors();
  }, []);

  const handleBooking = async (bookingDetails) => {
    try {
      if (!selectedMentor) return;

      const paymentAmount = selectedMentor.isPremium ? bookingDetails.amount + 1000 : bookingDetails.amount;
      const result = await bookSession({ ...bookingDetails, paymentAmount });

      if (result.success) {
        setBooking({ ...bookingDetails, paymentStatus: 'Success' });
        window.location.href = `/payment-success?bookingId=${result.bookingId}`;
      } else {
        setBooking({ ...bookingDetails, paymentStatus: 'Failed' });
      }
    } catch (error) {
      setError('Failed to process the payment. Please try again.');
    }
  };

  const handleMentorSelect = (mentor) => {
    setSelectedMentor(mentor);
    setRandomMentorAssignment(false);
  };

  const handleRandomAssignment = () => {
    setRandomMentorAssignment(true);
    const availableMentors = mentors.filter(mentor => 
      mentor.roles.includes(areaOfInterest) && mentor.isAvailable
    );
    if (availableMentors.length > 0) {
      const randomMentor = availableMentors[Math.floor(Math.random() * availableMentors.length)];
      setSelectedMentor(randomMentor);
    }
  };

  const handleAreaChange = (e) => {
    setAreaOfInterest(e.target.value);
  };

  const handleMentorTimeSlotUpdate = (mentorId, bookedTimeSlot) => {
    setMentors((prevMentors) =>
      prevMentors.map((mentor) =>
        mentor.id === mentorId
          ? { ...mentor, unavailableTimeSlots: [...mentor.unavailableTimeSlots, bookedTimeSlot] }
          : mentor
      )
    );
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/premium-booking"
          element={<PremiumBookingPage selectedMentor={selectedMentor} />}
        />
        <Route
          path="/random-assignment"
          element={<RandomAssignmentPage />}
        />
        <Route
          path="/student-dashboard"
          element={
            <DashboardContainer>
              <Title>Student Dashboard</Title>
              <form onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label>
                    Name:
                    <input 
                      type="text" 
                      value={studentDetails.name}
                      onChange={(e) => setStudentDetails({ ...studentDetails, name: e.target.value })}
                      required
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Email:
                    <input 
                      type="email" 
                      value={studentDetails.email}
                      onChange={(e) => setStudentDetails({ ...studentDetails, email: e.target.value })}
                      required
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Area of Interest:
                    <select value={areaOfInterest} onChange={handleAreaChange} required>
                      <option value="">Select Area of Interest</option>
                      {Array.from(new Set(mentors.flatMap(mentor => mentor.roles))).map(role => (
                        <option key={role} value={role}>{role}</option>
                      ))}
                    </select>
                  </label>
                </div>
                {!selectedMentor && !randomMentorAssignment && (
                  <MentorSearch
                    mentors={mentors}
                    areaOfInterest={areaOfInterest}
                    onBooking={handleMentorSelect}
                    onRandomAssignment={handleRandomAssignment}
                  />
                )}
                {(selectedMentor || randomMentorAssignment) && !booking && (
                  <BookingForm
                    selectedMentor={selectedMentor}
                    onSubmit={handleBooking}
                    randomMentorAssignment={randomMentorAssignment}
                    onTimeSlotUpdate={handleMentorTimeSlotUpdate}
                  />
                )}
                {booking && <BookingConfirmation booking={booking} />}
                {error && <p style={{ color: 'red' }}>{error}</p>}
              </form>
            </DashboardContainer>
          }
        />
        {/* Other routes */}
      </Routes>
    </Router>
  );
};

export default StudentDashboard;
