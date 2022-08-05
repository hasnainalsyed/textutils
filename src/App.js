import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Toast from './components/Toast';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const [toastMessage, setToastMessage] = useState(null);
  const showToastMessage = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showToastMessage('Dark Mode has been enabled!');
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#ffffff';
      showToastMessage('Dark Mode has been disabled!');
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Toast message={toastMessage} />
        <Routes>
          <Route exact path="/" element={<TextForm showToastMessage={showToastMessage} heading="Enter the text to analyze !" mode={mode} />} />
          <Route exact path="/about" element={<About title="About TextUtils" mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
