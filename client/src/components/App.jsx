import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import api from "../api/index"

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.getAllNotes();

      setNotes(result.data.data);
    };
    
    fetchData();
  }, [])


  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    
    api.deleteNote(id);
    


    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });

    window.location.reload();
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
