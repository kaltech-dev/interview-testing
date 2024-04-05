import React, { useEffect, useState } from 'react';

function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      const response = await fetch('http://localhost:3000/notes');
      const data = await response.json();
      setNotes(data);
    }

    fetchNotes();
  }, []);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {
           notes.map(notes => (
          <div>
          <li key={notes.id}>{notes.title}</li>
          </div>
        ))
        }
      </ul>
    </div>
  );
}

export default Notes;