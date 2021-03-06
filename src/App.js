import React from 'react';
import Header from './Components/Header/Header';
import routes from './routes';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
      <Footer />
    </div>
  );
}

export default App;
