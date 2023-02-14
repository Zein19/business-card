import './App.css';
import Profile from './components/Profile';
import Main from './components/Main';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile />
        <Main />
        <Footer />
      </header>
    </div>
  );
}

export default App;
