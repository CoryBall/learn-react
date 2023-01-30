import { Header } from '../components/navigation';
import { Hello, HelloClass } from '../components';

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="flex space-x-4">
        <Hello text="I'm a Functional Component!" />
        <HelloClass text="I'm a Class Component!" />
      </div>
      <div className="border-2 bg-black w-full" />
    </div>
  );
}

export default HomePage;
