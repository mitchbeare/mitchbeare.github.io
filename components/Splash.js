class Splash extends React.Component {
  render() {
    return (
      <div className="flex mx-4 my-2">
        <div className="w-1/3 bg-white rounded-lg shadow-xl mx-auto h-full p-6">
          <img
            src="https://via.placeholder.com/150
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
          </div>
          <div>
            <i className="fas fa-star" />
            <h1 className="text-2xl">Languages</h1>
          </div>
        </div>
        <div className="w-2/3 flex flex-col">
          <div className="flex-grow mx-auto p-6 bg-white rounded-lg shadow-xl">
            <div>
              <i className="fas fa-briefcase" />
              <h1 className="text-2xl">Work Experience</h1>
            </div>
            <div>
              <h2>Job title</h2>
              <p>Job description</p>
            </div>
            <div>
              <h2>Job title</h2>
              <p>Job description</p>
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
              <h2>Institution Name</h2>
              <p>Degree</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Splash />, document.getElementById('root'));
