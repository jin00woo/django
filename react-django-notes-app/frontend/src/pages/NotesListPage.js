import React, { useState, useEffect } from "react";

const NotesListPage = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/notes/");
    const data = await response.json();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <div className="notes-list">
        {notes.map((note, index) => (
          <h3 key={index}>{note.body}</h3>
        ))}
      </div>
    </div>
  );
};

export default NotesListPage;
