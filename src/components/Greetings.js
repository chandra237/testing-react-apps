import { useState } from "react";
import Output from "./Output";

const Greetings = () =>{
    const [changedText,setChangedText] = useState(false);

    const textChangeHandler = () =>{
        setChangedText(true);
    };


    return(
        <div>
            <h1>Hello World!!</h1>
            {!changedText && <Output>Its good to see u again!</Output>}
            {changedText && <Output>Changed!</Output>}
            <button onClick={textChangeHandler}>Change Text</button>
        </div>
    )
}

export default Greetings;