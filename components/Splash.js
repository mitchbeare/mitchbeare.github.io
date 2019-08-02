class Splash extends React.Component {
  render() {
    return (
      <div className="flex mx-4 my-2">
        <div className="w-1/3 bg-white rounded-lg shadow-xl mx-auto h-full p-6">
          <img
            src="https://via.placeholder.com/150
C/O https://placeholder.com/"
          />
          <h1>Mitchell Beare</h1>
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
              </li>
            </ul>
          </div>
        </div>
        <div className="w-2/3 flex flex-col">
          <div className="mx-auto p-6 bg-white rounded-lg shadow-xl">
            <h1>Work Experience</h1>
          </div>
          <div className="mx-auto p-6 bg-white rounded-lg shadow-xl">
            <h1>Education</h1>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Splash />, document.getElementById('root'));
