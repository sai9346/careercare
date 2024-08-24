import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormField = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Select = styled.select`
  padding: 0.75rem;
  font-size: 1rem;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const BookingForm = ({ onSubmit, selectedMentor, randomMentorAssignment, onTimeSlotUpdate }) => {
  const [timeSlot, setTimeSlot] = useState('');
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedMentor) return;

    const bookingDetails = {
      name: selectedMentor.name,
      email: selectedMentor.email,
      date,
      timeSlot,
      areaOfInterest: selectedMentor.roles[0], // Assuming first role is the primary area of interest
      amount: selectedMentor.isPremium ? 2000 : 1000, // Example amounts
    };

    // Update the time slot as unavailable for the selected mentor
    onTimeSlotUpdate(selectedMentor.id, timeSlot);

    onSubmit(bookingDetails);
  };

  return (
    <FormContainer>
      <h2>Book Session with {selectedMentor ? selectedMentor.name : 'Mentor'}</h2>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label>Date:</Label>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <Label>Time Slot:</Label>
          <Input
            type="time"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <Label>Duration:</Label>
          <Select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          >
            <option value="">Select Duration</option>
            <option value="30">30 minutes</option>
            <option value="60">60 minutes</option>
          </Select>
        </FormField>
        <SubmitButton type="submit" disabled={!timeSlot || !date || !duration}>
          Book Now
        </SubmitButton>
      </form>
    </FormContainer>
  );
};

export default BookingForm;
