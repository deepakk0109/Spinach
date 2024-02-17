import React from 'react';
import './App.css'; // Your CSS file to style the components
import IssuesResolved from './components/IssuesResolved';
import Methodology from './components/Methadology';
import PreviousExperience from './components/PreviousExperience';
import ProcessHighlights from './components/ProcessHighlights';
import Footer from './components/Footer';
import Navbar from './components/navbar'
import Illustration from './components/Illustration';
import HeroSection from './components/HeroSection'
import DesignSystem from './components/DesignSystem';




const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Illustration />
      <IssuesResolved />
      <Methodology/>
      <ProcessHighlights/>
      <DesignSystem/>
      <PreviousExperience/>
      <Footer/>
    </div>
  );
}

export default App;