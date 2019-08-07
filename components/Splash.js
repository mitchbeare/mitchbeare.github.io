class Splash extends React.Component {
  render() {
    return (
      <div>
        <div className="flex px-4 py-2 w-screen">
          <div className="flex-auto w-1/3 bg-white rounded-lg shadow-xl m-2 h-full p-6">
            <AboutPanel />
          </div>
          <div className="flex-auto w-2/3 flex flex-col m-2">
            <WorkPanel />
            <EducationPanel />
          </div>
        </div>
        <footer
          className="w-full mx-auto"
          style={{ backgroundColor: '#27ae60' }}
        >
          <div className="w-full p-2 text-center">
            <p>Find me on social media</p>
            <div className="flex">
              <a href="https://www.facebook.com/mitchell.beare.1">
                <i className="fas facebook-square" />
              </a>
              <a href="https://www.linkedin.com/in/mitchell-beare-0002b6151/">
                <i className="fas linkedin" />
              </a>
              <a href="https://github.com/mitchbeare">
                <i className="fas github-square" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

ReactDOM.render(<Splash />, document.getElementById('root'));
