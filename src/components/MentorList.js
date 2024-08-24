import React from 'react';
import styled from 'styled-components';

const MentorCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const MentorCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  max-width: 300px;
  text-align: center;
`;

const MentorName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const MentorRole = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
`;

const SelectButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const MentorList = ({ searchTerm, onMentorSelect }) => {
  const mentors = [
    { name: 'John Doe', role: 'Digital Marketing', isPremium: false, availability: ['7:00PM', '7:30PM', '8:00PM'] },
    { name: 'Jane Smith', role: 'FMCG Sales', isPremium: true, availability: ['7:00PM', '7:30PM', '8:00PM'] },
    { name: 'Michael Johnson', role: 'Equity Research', isPremium: false, availability: ['7:00PM', '7:30PM', '8:00PM'] },
    { name: 'Emily Davis', role: 'E-Commerce', isPremium: true, availability: ['7:00PM', '7:30PM', '8:00PM'] },
  ];

  const filteredMentors = mentors.filter((mentor) =>
    mentor.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MentorCardContainer>
      {filteredMentors.length > 0 ? (
        filteredMentors.map((mentor, index) => (
          <MentorCard key={index}>
            <MentorName>{mentor.name}</MentorName>
            <MentorRole>{mentor.role}</MentorRole>
            <SelectButton onClick={() => onMentorSelect(mentor)}>Select Mentor</SelectButton>
          </MentorCard>
        ))
      ) : (
        <p>No mentors found.</p>
      )}
    </MentorCardContainer>
  );
};

export default MentorList;
