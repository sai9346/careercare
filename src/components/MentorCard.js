import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 1rem;
  padding: 1rem;
  text-align: center;
`;

const MentorName = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  color: #333;
`;

const MentorDetails = styled.p`
  color: #555;
  margin-bottom: 1rem;
`;

const SelectButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const MentorCard = ({ mentor, onSelect }) => {
  return (
    <Card>
      <MentorName>{mentor.name}</MentorName>
      <MentorDetails>{mentor.expertise}</MentorDetails>
      <SelectButton onClick={() => onSelect(mentor)}>Select Mentor</SelectButton>
    </Card>
  );
};

export default MentorCard;
