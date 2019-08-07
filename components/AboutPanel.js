class AboutPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="max-w-3xl">
        <div className="relative w-full">
          <img
            className="w-full z-0 rounded-t-lg "
            src="../assets/images/Avatar.png"
            alt="avatar"
          />
          <h1
            className="absolute bottom-0 left-0 text-3xl z-1 p-2 rounded-tr-lg"
            style={{ color: '#ecf0f1', backgroundColor: '#2980b9' }}
          >
            Mitchell Beare
          </h1>
        </div>
        <div className="sm:mx-1 md:mx-2 lg:mx-2 xl:mx-3 min-w-">
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
              <a href="mailto: MitchellBeare@gmail.com">
                MitchellBeare@gmail.com
              </a>
            </li>
            <li>
              <i className="fas fa-phone mr-2" style={{ color: '#16a085' }} />
              <a href="tel:0434052203">0434 052 203</a>
            </li>
          </ul>
        </div>
        <hr className="mx-3" />
        <div className="mx-3">
          <h1 className="text-2xl" style={{ color: '#95a5a6' }}>
            <i
              className="fas fa-certificate mr-2"
              style={{ color: '#16a085' }}
            />
            Skills
          </h1>
          <SkillBar
            skillName="Scripting"
            barColor="#1abc9c"
            fill="60%"
            text="test"
          />
          <SkillBar
            skillName="Development"
            barColor="#2ecc71"
            fill="40%"
            text="test"
          />
          <SkillBar
            skillName="Design"
            barColor="#3498db"
            fill="35%"
            text="test"
          />
          <SkillBar
            skillName="Tech Support"
            barColor="#9b59b6"
            fill="80%"
            text="test"
          />
        </div>
        <hr className="mx-3" />
        <div className="mx-3 mb-2">
          <h1 className="text-2xl" style={{ color: '#95a5a6' }}>
            <i className="fas fa-globe mr-2" style={{ color: '#16a085' }} />
            Languages
          </h1>
          <SkillBar
            skillName="Powershell"
            barColor="#1abc9c"
            fill="60%"
            text="test"
          />
          <SkillBar skillName="VBA" barColor="#2ecc71" fill="40%" text="test" />
          <SkillBar
            skillName="Javascript"
            barColor="#3498db"
            fill="50%"
            text="test"
          />
          <SkillBar
            skillName="Java"
            barColor="#9b59b6"
            fill="45%"
            text="test"
          />
        </div>
      </div>
    );
  }
}
