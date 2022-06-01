import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <div data-theme="dark">
        <div className='text-right pr-2 pt-2'>
        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          a
        </label>
        </div>
      <Home></Home>
    </div>
  );
}

export default App;
