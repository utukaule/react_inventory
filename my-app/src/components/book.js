import { useState } from 'react';
function Book({ getValue }) {
    const [book, bookCount] = useState(19);
    const addbook = () => {
        bookCount(book + 1);
    }

    const minusBook = () => {
        bookCount(book - 1);
    }
    
    return (
        <>
            <h1>getValue({book})</h1>
            <h1>Books: {book}</h1>
            <button onClick={addbook}>Add</button>
            <button onClick={minusBook}>Minus</button>
        </>
    )
}
export { Book }