import React, { useState } from 'react';
import styled from 'styled-components';


const PaymentForm = styled.div`
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormField = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 1rem;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const PaymentProcessing = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle payment processing
  };

  return (
    <PaymentForm>
      <h2>Payment Processing</h2>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="cardNumber">Card Number</Label>
          <Input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="expiryDate">Expiry Date</Label>
          <Input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={paymentInfo.expiryDate}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="cvv">CVV</Label>
          <Input
            type="text"
            id="cvv"
            name="cvv"
            value={paymentInfo.cvv}
            onChange={handleChange}
            required
          />
        </FormField>
        <SubmitButton type="submit">Process Payment</SubmitButton>
      </form>
    </PaymentForm>
  );
};

export default PaymentProcessing;
