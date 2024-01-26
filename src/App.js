import './App.css';
import Details from './components/Details/Details';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import ThankYou from './components/ThankYou/ThankYou';

function App() {
  return (
    <div className="App">
      <Header />
      <Details />
      <Projects />
      <ThankYou />
    </div>
  );
};

export default App;
