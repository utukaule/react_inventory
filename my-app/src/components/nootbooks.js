import { useState } from 'react';
function Noot() {
    const [noteBook, noteBookCount] = useState(12);
    const addNoot = () => {
        noteBookCount(noteBook + 1);
    }
    const minusNoot = () => {
        noteBookCount(noteBook - 1);
    }

    return (
        <>
            <h1>NoteBooks: {noteBook}</h1>
            <button onClick={addNoot}>Add</button>
            <button onClick={minusNoot}>Minus</button>
        </>
    )
}
export {Noot}