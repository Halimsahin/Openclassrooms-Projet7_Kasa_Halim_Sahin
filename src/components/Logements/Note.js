import React from 'react';



function Note(props) {
    const score = props.score;
    const notes = [1, 2, 3, 4, 5];
    return (
      <div className="note-contenair">
        {notes.map((note) =>
          score >= note ? (
              <i key={note.toString()} className="etoile fa-solid fa-star"></i> 
          ) : (
            <i key={note.toString()} className="etoile fa-regular fa-star"></i>
          )
        )}
      </div>
    );
}

export default Note;