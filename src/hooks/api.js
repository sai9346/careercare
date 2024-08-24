// api.js
export const getMentors = async () => {
  const response = await fetch('/api/mentors');
  if (!response.ok) throw new Error('Failed to fetch mentors');
  return response.json();
};

export const bookSession = async (bookingDetails) => {
  const response = await fetch('/api/book-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookingDetails),
  });
  if (!response.ok) throw new Error('Failed to book session');
  return response.json();
};
