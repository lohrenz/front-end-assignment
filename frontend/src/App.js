import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotePageList from './components/Notepage/NotePageList';

import Modal from './components/Modal/Modal';

function App() {
  return (
    <div className="App">
      <Header />
      <NotePageList />
      <Modal />
      <Footer />
    </div>
  );
}

export default App;
