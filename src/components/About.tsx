import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          AI Automation Developer with experience building LLM-powered applications,
          AI agents, and workflow automation systems. Skilled in Python, API integrations,
          and automation tools such as n8n. Experienced in developing AI-driven tools
          for content automation, data scraping, and workflow optimization.
        </p>
        <div className="building-now">
          <h4>What I’m Building Now</h4>
          <p>Developing autonomous AI agents and advanced automation tools to solve real-world productivity challenges.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
