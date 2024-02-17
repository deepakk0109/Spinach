import React from 'react';

const ProcessHighlights = () => {
  return (
    <div className="process-highlights">
      <h2>Design system process highlights:</h2>
      <p>A Design System redesign roadmap has to be delicately handled and marked out with much careful consideration rather than impulse.</p>
      <div className="highlight-sections">
        {/* You would repeat this structure for each highlight */}
        <div className="highlight">
          <h3>/01 Research first.</h3>
          <p>Our research is designed to interview stakeholders, end-users, and decision-makers in order to grasp diverse needs. We incorporate findings into a comprehensive strategy that aligns with business goals, ensuring the Design system meets user expectations and industry standards.</p>
        </div>
        <div className="highlight">
          <h3>/02 Brand-centric DLS.</h3>
          <p>To reinforce the brand's visual identity, values and tone of voice,  we build consistency in the use of brand colours, typography, and imagery, coupled with intuitive interactions to foster brand affinity and loyalty across all touchpoints.</p>
        </div>
        <div className="highlight">
          <h3>/03 Design principles and guidelines.</h3>
          <p>Based on design trends, research outcomes and brand essence, we identify core values, guidelines and themes that drive the design creation process and craft an experience that is unique to the brand for its users.</p>
        </div>
        <div className="highlight">
          <h3>/04 Modularity for multiple use-cases.</h3>
          <p>We adopt a modular process of Design System creation. Based on use-cases and development prioritization we create components, patterns and templates that empower the design and dev teams to scale the sprint outcomes exponentially.</p>
        </div>
        <div className="highlight">
          <h3>/05 Cross-functional collaboration.</h3>
          <p>Our Design System collaboration is characterized by an inclusive working approach, fostering outcomes that excel in scale, efficiency and cost-effectiveness. We drive results that go beyond expectations, ensuring a synergy of creativity and practicality for optimal Design System performance.</p>
        </div>
        <div className="highlight">
          <h3>/06 Version control and documentation handover.</h3>
          <p>We manage the handover process meticulously, with robust documentation and tight governance. Our processes ensure lasting consistency and quality, facilitating a seamless transition and nurturing the sustained success of the design system over time.</p>
        </div>
        {/* ... other highlight sections ... */}
      </div>
    </div>
  );
};

export default ProcessHighlights;