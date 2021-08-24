import { Hello, HelloClass } from '../components';

function HomePage() {
  return (
    <div className="m-auto">
      <div className="flex space-x-4">
        <Hello text="I'm a Functional Component!" />
        <HelloClass text="I'm a Class Component!" />
      </div>
      <div className="border-2 bg-black w-full" />
    </div>
  );
}

export default HomePage;
