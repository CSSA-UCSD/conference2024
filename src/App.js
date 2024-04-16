import React from 'react';
import './style/main.scss';
import Navbar from './components/components/Navbar';
import Main from './components/Main';
import Footer from './components/components/Footer';

function App() {
  return (
    <div className={"App"}>
      < Navbar/>
      < Main/>
      < Footer/>
    </div>
  );
}

export default App;
