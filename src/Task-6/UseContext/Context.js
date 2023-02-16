import React, { createContext } from "react";
import A from './A';

const Name = createContext();
const Tech = createContext();

function Context() {
    const Fname = "Viral";
    const Field = "React JS";
    return (
        <>
            <Name.Provider value={Fname}>
                <Tech.Provider value={Field}>
                    <A />
                </Tech.Provider>
            </Name.Provider>
        </>
    );
}

export default Context;
export { Name, Tech };