class AboutPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div className="flex-grow mx-auto p-6 bg-white rounded-lg shadow-xl">
          <div>
            <h1 className="text-2xl">
              <i className="fas fa-briefcase mr-2 text-indigo-600" />
              Work Experience
            </h1>
          </div>
          <div>
            <h2>Computer Technician / Queensland Education Department</h2>
            <h3>
              <i className="fas fa-calendar mr-2" />
              2015 - present
            </h3>
            <p>
              First Contact support, providing fault diagnostics and scripted
              workflows for staff.
            </p>
          </div>
          <br />
          <div>
            <h2>Computer Technician/ Computers 4 Learning</h2>
            <h3>
              <i className="fas fa-calendar mr-2" />
              2016 - present
            </h3>
            <p>
              Volunteer systems Administrator, primarily working on in house
              system and application development.
            </p>
          </div>
          <br />
          <div>
            <h2>Developer / Teacher in a Box</h2>
            <h3>
              <i className="fas fa-calendar mr-2" />
              some time - present
            </h3>
            <p>
              Volunteer developer working on automation and systems software to
              support the project.
            </p>
          </div>
        </div>
    );
  }
}
