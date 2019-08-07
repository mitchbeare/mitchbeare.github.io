class Splash extends React.Component {
  render() {
    return (
      <div className="flex px-4 py-2 w-screen">
        <AboutPanel />
        <div className="w-2/3 flex flex-col mx-auto">
          <div className="flex-grow mx-auto p-6 bg-white rounded-lg shadow-xl">
            <div>
              <i className="fas fa-briefcase" />
              <h1 className="text-2xl"> Work Experience</h1>
            </div>
            <div>
              <h2>Computer Technician / Queensland Education Department</h2>
              <i className="fas fa-calendar" />
              <h3>2015 - present</h3>
              <p>
                First Contact support, providing fault diagnostics and scripted
                workflows for staff.
              </p>
            </div>
            <br />
            <div>
              <h2>Computer Technician/ Computers 4 Learning</h2>
              <i className="fas fa-calendar" />
              <h3>2016 - present</h3>
              <p>
                Volunteer systems Administrator, primarily working on in house
                system and application development.
              </p>
            </div>
            <br />
            <div>
              <h2>Developer / Teacher in a Box</h2>
              <i className="fas fa-calendar" />
              <h3>some time - present</h3>
              <p>
                Volunteer developer working on automation and systems software
                to support the project.
              </p>
            </div>
            <div>
              <h2>Job title</h2>
              <p>Job description</p>
            </div>
          </div>
          <div className="flex-grow mx-auto p-6 bg-white rounded-lg shadow-xl">
            <div>
              <i className="fas fa-graduation-cap" />
              <h1 className="text-2xl">Education</h1>
            </div>
            <div>
              <h2>Australis College</h2>
              <i className="fas fa-calendar" />
              <h3>2019 - Ongoing</h3>
              <p>Diploma in Software Development</p>
            </div>
            <div>
              <h2>TAFE Queensland</h2>
              <i className="fas fa-calendar" />
              <h3>2017 - 2017</h3>
              <p>Certificate IV Information Technology</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Splash />, document.getElementById('root'));
