import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Toast from './components/Toast';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // const [toastMessage, setToastMessage] = useState(null);
  // const showToastMessage = (message) => {
  //   setToastMessage(message);
  // }

  // const showToast = () => {
  //   document.getElementById('toast').classList.remove('hide');
  //   document.getElementById('toast').classList.add('show');
  //   setTimeout(() => {
  //     document.getElementById('toast').classList.remove('show');
  //     document.getElementById('toast').classList.add('hide');
  //   }, 3000);
  // }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert('Dark mode enabled!', 'success');
      // showToastMessage('Dark Mode has been enabled!');
      // showToast();
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#ffffff';
      showAlert('Dark mode disabled!', 'success');
      // showToastMessage('Dark Mode has been disabled!');
      // showToast();
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <Toast message={toastMessage} /> */}
      <TextForm showAlert={showAlert} heading="Enter the text to analyze !" mode={mode} />
      {/* <About title="About TextUtils" /> */}
    </>
  );
}

export default App;
