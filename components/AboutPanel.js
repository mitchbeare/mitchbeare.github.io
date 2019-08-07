class AboutPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="relative w-full">
          <img
            className="w-full z-0"
            src="../assets/images/Avatar.png"
            alt="avatar"
          />
          <h1
            className="absolute bottom-0 left-0 text-2xl z-1 p-2 w-full"
            style={{ color: '#95a5a6' }}
          >
            Mitchell Beare
          </h1>
        </div>
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
        <hr />
        <div>
          <h1 className="text-2xl" style={{ color: '#95a5a6' }}>
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
        <hr />
        <div>
          <h1 className="text-2xl" style={{ color: '#95a5a6' }}>
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
