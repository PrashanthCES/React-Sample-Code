import React from 'react'
import { getSub } from '../util/Index';
import { fruits } from '../constant/Index';

function Substarction() {
    const sub = getSub(2986, 6);


    return (
        <div>
            {
                sub
            }
            {fruits.map(fruit =>
                <li>{fruit}</li>
            )}
        </div>
    )
}

export default Substarction;
