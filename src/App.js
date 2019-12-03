import React from 'react';
import pic from './good_img.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Wussup</h1>
      <img src={pic} className="pic" alt="pic" />
    </div>
  );
}

export default App;
