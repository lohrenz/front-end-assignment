import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotePageList from './components/Notepage/NotePageList';


function App() {
  return (
    <div className="App">
      <Header />
      <NotePageList />
      <Footer />
    </div>
  );
}

export default App;
