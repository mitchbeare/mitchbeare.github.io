class WorkPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="flex-auto w-full mx-auto p-6 my-1 bg-white rounded-lg shadow-xl">
        <div>
          <h1 className="text-2xl" style={{ color: '#95a5a6' }}>
            <i className="fas fa-briefcase mr-2" style={{ color: '#16a085' }} />
            Work Experience
          </h1>
        </div>
        <div>
          <h2>
            School Computer Technician /{' '}
            <a href="https://education.qld.gov.au/">
              Queensland Education Department
            </a>
          </h2>
          <h3>
            <i className="fas fa-calendar mr-2" style={{ color: '#16a085' }} />
            2015 - present
          </h3>
          <p>
            First Contact support, providing fault diagnostics and scripted
            workflows for staff.
          </p>
        </div>
        <hr />
        <br />
        <div>
          <h2>
            Computer Technician/{' '}
            <a href="http://computers4learning.org.au/">Computers 4 Learning</a>
          </h2>
          <h3>
            <i className="fas fa-calendar mr-2" style={{ color: '#16a085' }} />
            2016 - present
          </h3>
          <p>
            Volunteer systems Administrator, primarily working on in house
            system and application development.
          </p>
        </div>
        <hr />
        <br />
        <div>
          <h2>
            Developer /{' '}
            <a href="http://teacherinabox.org.au/">Teacher in a Box</a>
          </h2>
          <h3>
            <i className="fas fa-calendar mr-2" style={{ color: '#16a085' }} />
            2018 - present
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
