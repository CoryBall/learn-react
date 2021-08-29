import React from 'react';
import { Counter } from '@ui/counter';

const CounterPage: React.FC = () => {
    return (
        <div className="m-auto">
            <div className="flex space-x-4">
                <Counter />
            </div>
        </div>
    )
}

export default CounterPage;