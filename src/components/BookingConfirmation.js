import React from 'react';
import styled from 'styled-components';

const ConfirmationContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const BookingConfirmation = ({ booking }) => {
  return (
    <ConfirmationContainer>
      <h2>Booking Confirmation</h2>
      <p>Booking Status: {booking.paymentStatus}</p>
      <p>Name: {booking.name}</p>
      <p>Email: {booking.email}</p>
      <p>Date: {booking.date}</p>
      <p>Time Slot: {booking.timeSlot}</p>
      <p>Duration: {booking.duration}</p>
      <p>Area of Interest: {booking.areaOfInterest}</p>
    </ConfirmationContainer>
  );
};

export default BookingConfirmation;
