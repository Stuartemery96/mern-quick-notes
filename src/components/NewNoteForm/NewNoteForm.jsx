import { useState } from "react";

export default function NewNoteForm({handleCreateNote}) {
  
  const [newNote, setNewNote] = useState({
    text: '',
  })

  async function handleSubmit(evt) {
    evt.preventDefault();
    handleCreateNote(newNote);
  }

  function handleChange(evt) {
    const formNewNote = {...newNote, [evt.target.name]: evt.target.value};
    setNewNote(formNewNote);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
      name="text"
      value={newNote.text}
      onChange={handleChange}
      required
      />
      <button type="Submit">Create Note</button>
    </form>
  )
}