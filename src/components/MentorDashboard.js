import React from 'react';
import styled from 'styled-components';

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

const BookingCard = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

const MentorDashboard = ({ bookings }) => {
  return (
    <DashboardContainer>
      <Title>Mentor Dashboard</Title>
      {bookings.length > 0 ? (
        bookings.map((booking, index) => (
          <BookingCard key={index}>
            <h2>Booking Details</h2>
            <p><strong>Student Name:</strong> {booking.name}</p>
            <p><strong>Email:</strong> {booking.email}</p>
            <p><strong>Date:</strong> {booking.date}</p>
            <p><strong>Time Slot:</strong> {booking.timeSlot}</p>
            <p><strong>Area of Interest:</strong> {booking.areaOfInterest}</p>
          </BookingCard>
        ))
      ) : (
        <p>No bookings yet.</p>
      )}
    </DashboardContainer>
  );
};

export default MentorDashboard;
