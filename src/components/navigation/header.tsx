import React from 'react';
import {Link} from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <div className="w-screen h-24 py-4 bg-blue-500">
            <div className="w-1/2 h-full flex items-center mx-auto justify-around space-x-8">
                <div className="text-blue-500 rounded bg-white px-4 py-2 text-xl">
                    <Link to="/">Home</Link>
                </div>
                <div className="text-blue-500 rounded bg-white px-4 py-2 text-xl">
                    <Link to="/counter">Counter</Link>
                </div>
                <div className="text-blue-500 rounded bg-white px-4 py-2 text-xl">
                    <Link to="/characters">Characters</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;