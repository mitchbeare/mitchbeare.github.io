class EducationPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="flex-auto w-full mx-auto p-6 my-1 bg-white rounded-lg shadow-xl">
        <div>
          <h1 className="text-2xl" style={{ color: '#95a5a6' }}>
            <i
              className="fas fa-graduation-cap mr-2"
              style={{ color: '#16a085' }}
            />
            Education
          </h1>
        </div><div>
          <h2>University of Queensland</h2>
          <h3>
            <i className="fas fa-calendar mr-2" style={{ color: '#16a085' }} />
            2020 - Ongoing
          </h3>
          <p>Bachelor of Computer Science</p>
        </div>
        <hr />
        <div>
          <h2>Australis College</h2>
          <h3>
            <i className="fas fa-calendar mr-2" style={{ color: '#16a085' }} />
            2019 - Ongoing
          </h3>
          <p>Diploma in Software Development</p>
        </div>
        <hr />
        <div>
          <h2>TAFE Queensland</h2>
          <h3>
            <i className="fas fa-calendar mr-2" style={{ color: '#16a085' }} />
            2017 - 2017
          </h3>
          <p>Certificate IV Information Technology</p>
        </div>
      </div>
    );
  }
}
