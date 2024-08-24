import React, { useState, useEffect } from 'react';
import { getMentors } from '../hooks/api';
import MentorSearch from './MentorSearch';

const RandomAssignmentPage = ({ onMentorSelect }) => {
  const [mentors, setMentors] = useState([]);
  const [areaOfInterest, setAreaOfInterest] = useState('');
  const [randomMentor, setRandomMentor] = useState(null);

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

  const handleAreaChange = (e) => {
    setAreaOfInterest(e.target.value);
  };

  const handleRandomAssignment = () => {
    const availableMentors = mentors.filter(mentor =>
      mentor.roles.includes(areaOfInterest) && mentor.isAvailable
    );
    if (availableMentors.length > 0) {
      const randomMentor = availableMentors[Math.floor(Math.random() * availableMentors.length)];
      setRandomMentor(randomMentor);
      onMentorSelect(randomMentor);
    }
  };

  return (
    <div>
      <h2>Assign a Random Mentor</h2>
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
        <button onClick={handleRandomAssignment}>Assign Random Mentor</button>
      </div>
      <MentorSearch mentors={mentors} areaOfInterest={areaOfInterest} onMentorSelect={onMentorSelect} />
      {randomMentor && (
        <div>
          <h3>Selected Mentor</h3>
          <p>{randomMentor.name}</p>
          <p>{randomMentor.bio}</p>
        </div>
      )}
    </div>
  );
};

export default RandomAssignmentPage;
