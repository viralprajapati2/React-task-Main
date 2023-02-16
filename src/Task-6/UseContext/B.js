import React, { useContext } from 'react';
import { Name, Tech } from './Context';

const B = () => {

    const Fname = useContext(Name);
    const Field = useContext(Tech);

    return (
        <div>
            <h2>Hello, My name is {Fname} And I am in {Field}.</h2>
        </div>
    )
}

export default B;
