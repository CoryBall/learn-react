import React from 'react';
import { Hello, HelloClass } from './components';

function App() {
  return (
    <div className="m-auto w-full h-full flex justify-center flex-col items-center">
      <div className="flex space-x-4">
        <Hello text="I'm a Functional Component!" />
        <HelloClass text="I'm a Class Component!" />
      </div>
      <div className="border-2 bg-black w-full" />
    </div>
  );
}

export default App;
