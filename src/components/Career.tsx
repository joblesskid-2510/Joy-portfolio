import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Intern</h4>
                <h5>AVBRH Hospital, Wardha</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Worked with a five-member team to analyze departmental processes,
              identify key issues, propose solutions, and document insights to
              improve operational efficiency.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hardware Intern</h4>
                <h5>DeepFacts Pvt Ltd, Hyderabad</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Worked on biomedical device development, assisting in hardware
              design, testing, and optimization to support innovative healthcare
              technology solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AIML Intern</h4>
                <h5>Sky Highes Technologies, Nagpur</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Contributed to AI and machine learning projects by assisting in
              model development, data preprocessing, and performance evaluation
              with real-world AI applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Intern</h4>
                <h5>Tai Foundation, Mumbai</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Focused on geospatial analytics and machine learning, contributing
              to data-driven environmental research through satellite data
              processing, feature extraction, and model development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
