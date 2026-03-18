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
                <h4>AI Intern</h4>
                <h5>Marai School of Technologies</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed AI-powered automation workflows using n8n.
              Built API integrations to streamline workflow automation.
              Assisted in developing AI-driven productivity tools.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Intern</h4>
                <h5>Gmax Electric</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built internal automation workflows using n8n to streamline operational processes.
              Automated lead capture and business processes using APIs.
              Integrated AI tools and automation pipelines to improve internal efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
