class AboutPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="w-1/3 bg-white rounded-lg shadow-xl mx-auto h-full p-6">
        <img src="https://via.placeholder.com/250C/O https://placeholder.com/" />
        <h1 className="text-2xl">Mitchell Beare</h1>
        <div>
          <ul>
            <li>
              <i className="fas fas-briefcase" />
              Programmer
            </li>
            <li>
              <i className="fas fa-home" />
              Brisbane, Australia
            </li>
            <li>
              <i className="fas fa-envelope" />
              MitchellBeare@gmail.com
            </li>
            <li>
              <i className="fas fa-phone" />
              0434 052 203
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl">
            <i className="fas fa-star" />
            Skills
          </h1>
          <SkillBar skillName="Scripting" barColor="#1abc9c" fill="60%" />
          <SkillBar skillName="Development" barColor="#2ecc71" fill="40%" />
          <SkillBar skillName="Design" barColor="#3498db" fill="35%" />
          <SkillBar skillName="Tech Support" barColor="#9b59b6" fill="80%" />
        </div>
        <div>
          <h1 className="text-2xl">
            <i className="fas fa-star" />
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
