import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/Home';
import News from './components/News';

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Home />
    </div>
  )
}

export default App;