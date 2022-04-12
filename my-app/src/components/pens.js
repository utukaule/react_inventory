import { useState } from 'react';
function Pens(){
    const [pen,penCount] = useState(22);
    const addPen = () => {
        penCount(pen + 1);
    }
    const minusPen = () => {
        penCount(pen - 1);
    }
    return (
        <>
        <h1>Books: {pen}</h1>
            <button onClick={addPen}>Add</button>
            <button onClick={minusPen}>Minus</button>
        </>
    )
}

export {Pens}