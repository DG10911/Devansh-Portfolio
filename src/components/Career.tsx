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
                <h4>Cybersecurity Intern</h4>
                <h5>InternPro</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Gained hands-on experience in cybersecurity concepts and practices.
              Worked on basic security analysis, vulnerabilities, and protection techniques.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Marketing Intern</h4>
                <h5>Corizo</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Assisted in digital marketing strategies and campaign execution.
              Developed understanding of branding, outreach, and audience engagement.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech – Computer Science Engineering</h4>
                <h5>SRM Institute of Science and Technology</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing B.Tech in Computer Science at SRMIST, Kattankulathur, Chennai.
              Exploring AI/ML and cybersecurity through hands-on projects and open-source contributions.
              Expected graduation: 2028.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
