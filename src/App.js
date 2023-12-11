import React from 'react'
import Navbar from './components/Navbar'
import Personaltraining from './components/Personaltraining';
import Schedule from './components/Schedule';
import Banner from './components/Banner';
import Contactform from './components/Contactform';
import Cards from './components/Cards'
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Personaltraining />  
      <Contactform />
      <Schedule />
      <Cards />
      <Footer />
      
    </div>
  );
}

export default App;
