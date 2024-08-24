// PremiumBookingPage.js
import React, { useState } from 'react';
import BookingForm from './BookingForm';
import BookingConfirmation from './BookingConfirmation';
import { bookSession } from '../hooks/api';

const PremiumBookingPage = ({ selectedMentor }) => {
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState(null);

  const handleBooking = async (bookingDetails) => {
    try {
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

  return (
    <div>
      {!booking && (
        <BookingForm
          selectedMentor={selectedMentor}
          onSubmit={handleBooking}
        />
      )}
      {booking && <BookingConfirmation booking={booking} />}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default PremiumBookingPage;
