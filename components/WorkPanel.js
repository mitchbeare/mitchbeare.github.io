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
            Web Support Officer /{' '}
            <a href="http://teacherinabox.org.au/">Queensland Deparment of Education - Information Technology Branch</a>
          </h2>
          <h3>
            <i className="fas fa-calendar mr-2" style={{ color: '#16a085' }} />
            2020 - present
          </h3>
          <p>
            Website support officer on the websites for schools project. Providing front line Quality Assurance testing and website support.
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
        <hr />
        <br />
        <div>
          <h2>
            School Computer Technician /{' '}
            <a href="https://education.qld.gov.au/">
              Queensland Education Department - Public Schools
            </a>
          </h2>
          <h3>
            <i className="fas fa-calendar mr-2" style={{ color: '#16a085' }} />
            2015 - 2020
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
            Computer Technician /{' '}
            <a href="http://computers4learning.org.au/">Computers 4 Learning</a>
          </h2>
          <h3>
            <i className="fas fa-calendar mr-2" style={{ color: '#16a085' }} />
            2016 - 2019
          </h3>
          <p>
            Volunteer systems Administrator, primarily working on in house
            system and application development.
          </p>
        </div>
        <hr />
        <br />
        
      </div>
    );
  }
}
