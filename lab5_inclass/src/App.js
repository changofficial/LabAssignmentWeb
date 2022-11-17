import logo from './logo.svg';
import './App.css';
import DatingCard from './component/DatingCards';
import Header from './component/Header';
import SwipeButtons from './component/SwipeButtons';

function App() {
  return (
    <div className="App">
      <Header/>
      <DatingCard/>
      <SwipeButtons/>
    </div>
  );
}

export default App;
