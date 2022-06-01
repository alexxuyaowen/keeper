import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote({...note,[name]: value});
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          autoFocus
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <IconButton onClick={submitNote}><AddIcon /></IconButton>
      </form>
    </div>
  );
}

export default CreateArea;
