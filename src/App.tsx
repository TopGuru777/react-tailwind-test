import React from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Picker from './components/picker';
import Footer from './components/footer';

function App() {
  return (
    <div className='relative overflow-hidden max-w-[515px] mx-auto font-lato'>
      <div className="border-[#5D5D5D] border-2 rounded-2xl overflow-hidden">
        {/* main body */}
        <Header />
        {/* main body */}
        <Main />
        {/* footer */}
        <Footer />
      </div>
      {/* Picker */}
      <Picker />
    </div>
  );
}

export default App;
