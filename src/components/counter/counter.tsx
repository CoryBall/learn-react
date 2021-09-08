import React from 'react';



const Counter: React.FC = () => {
    const [count, setCount] = React.useState<number>(0);
    const countRef = React.useRef<number>(0);

    return (
        <div className="flex m-auto text-6xl text-center space-x-10">
            <button
                onClick={() => {
                    setCount(count - 1)
                    // countRef.current--;
                    console.log(countRef.current);
                }}
                className="text-white rounded bg-blue-500 w-32 h-16 px-4 py-2 text-4xl"
            >
                -
            </button>
            <div className="bg-blug-500 text-blue-500">
                <span>{count}</span>
            </div>
            <button
                onClick={() => {
                    setCount(count + 1)
                    // countRef.current++;
                    console.log(countRef.current);
                }}
                className="text-white rounded bg-blue-500 w-32 h-16 px-4 py-2 text-4xl"
            >
                +
            </button>
        </div>
    )
}

export default Counter;