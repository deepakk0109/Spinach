import React from 'react';
// import './Methodology.css'; // A separate CSS file for styling this component

const Methodology = () => {
  return (
    <div className="methodology">
      <h2>Our proven methodology for Design Systems.</h2>
      <p>Redesigning a design system is a densely strategized process that involves careful planning, collaboration, and iterative refinement.</p>
      {/* Include images and descriptions as needed */}
      <div className="methodology-images">
        <img src="methImage1.png"/>
        <img src="methImage2.png"/>
        <img src="methImage3.png"/>
        <img src="methImage4.png"/>
        <img src="methImage5.png"/>

      </div>
    </div>
  );
};

export default Methodology;