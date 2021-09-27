import React from 'react'
import { getSum } from '../util/Index';

function Addition() {
    const sum = getSum(1, 5);
    return (
        <div>

            {
                sum
            }
        </div>
    )
}

export default Addition;
