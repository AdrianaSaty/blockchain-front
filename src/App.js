import React from 'react';
import './App.css';
import SignupForm from './components/molecules/SignupForm/SignupForm';
import LadingPage from './components/pages/LadingPage/LadingPage'

function App() {
  return (
    <div className="App">
      <LadingPage />
      <SignupForm />
    </div>
  );
}

export default App;
