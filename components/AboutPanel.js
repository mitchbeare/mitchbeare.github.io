class AboutPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="w-1/3 bg-white rounded-lg shadow-xl mx-auto h-full p-6">
        <img
          src="https://via.placeholder.com/250
  C/O https://placeholder.com/"
        />
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
          <i className="fas fa-star" />
          <h1 className="text-2xl">Skills</h1>
          <SkillBar skillName="Scripting" />
          <SkillBar skillName="Development" />
          <SkillBar skillName="Design" />
          <SkillBar skillName="Tech Support" />
        </div>
        <div>
          <i className="fas fa-star" />
          <h1 className="text-2xl">Languages</h1>
          <SkillBar skillName="Powershell" />
          <SkillBar skillName="VBA" />
          <SkillBar skillName="Javascript" />
          <SkillBar skillName="Java" />
        </div>
      </div>
    );
  }
}
