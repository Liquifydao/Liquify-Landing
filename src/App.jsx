import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureTabs from './components/FeatureTabs';
import xSOLCard from './components/xSOLCard';
import Footer from './components/Footer';
import Background from './components/Background';

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <FeatureTabs />
      </main>

      {/* Hide on mobile */}
      <div className="hidden md:block">
        <Footer />
      </div>
    </>
  );
}

export default App;
