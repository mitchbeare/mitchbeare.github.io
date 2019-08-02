class Splash extends React.Component {
  render() {
    return (
      <div className="flex mx-4 my-2">
        <div className="w-1/3 bg-red-100 h-full">
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
          <div className="bg-green-100">
            <h1>Work Experience</h1>
          </div>
          <div className="bg-blue-100">
            <h1>Education</h1>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Splash />, document.getElementById('root'));
