class AboutPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img src="https://via.placeholder.com/250" />
        <h1 className="text-2xl" style={{color: '#95a5a6'}}>Mitchell Beare</h1>
        <div>
          <ul>
            <li>
              <i
                className="fas fas-briefcase mr-2"
                style={{ color: '#16a085' }}
              />
              Programmer
            </li>
            <li>
              <i className="fas fa-home mr-2" style={{ color: '#16a085' }} />
              Brisbane, Australia
            </li>
            <li>
              <i
                className="fas fa-envelope mr-2"
                style={{ color: '#16a085' }}
              />
              MitchellBeare@gmail.com
            </li>
            <li>
              <i className="fas fa-phone mr-2" style={{ color: '#16a085' }} />
              0434 052 203
            </li>
          </ul>
        </div>
        <div>
        <h1 className="text-2xl" style={{color: '#95a5a6'}}>
            <i
              className="fas fa-certificate mr-2"
              style={{ color: '#16a085' }}
            />
            Skills
          </h1>
          <SkillBar skillName="Scripting" barColor="#1abc9c" fill="60%" />
          <SkillBar skillName="Development" barColor="#2ecc71" fill="40%" />
          <SkillBar skillName="Design" barColor="#3498db" fill="35%" />
          <SkillBar skillName="Tech Support" barColor="#9b59b6" fill="80%" />
        </div>
        <div>
        <h1 className="text-2xl" style={{color: '#95a5a6'}}>
            <i className="fas fa-globe mr-2" style={{ color: '#16a085' }} />
            Languages
          </h1>
          <SkillBar skillName="Powershell" barColor="#1abc9c" fill="60%" />
          <SkillBar skillName="VBA" barColor="#2ecc71" fill="40%" />
          <SkillBar skillName="Javascript" barColor="#3498db" fill="50%" />
          <SkillBar skillName="Java" barColor="#9b59b6" fill="45%" />
        </div>
      </div>
    );
  }
}
