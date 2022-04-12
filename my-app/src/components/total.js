import { Book } from "./book"
import { Noot } from "./nootbooks"
import { Pens } from "./pens"

function Total(){
    const totalCount = Noot + Pens + Book;
    return (
        <>
        <h1>Total Count is :{totalCount}</h1>
        </>
    )

}
export {Total}
