class Splash extends React.Component {
  render() {
    return (
      <div className="flex px-4 py-2 w-screen">
        <div className="w-1/3 bg-white rounded-lg shadow-xl mx-auto h-full p-6 flex-grow">
          <AboutPanel />
        </div>
        <div className="w-2/3 flex flex-col mx-auto">
          <WorkPanel />
          <EducationPanel />
        </div>
        <footer className="bg-black">
          <div>
            <p>Find me on social media</p>
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
        </footer>
      </div>
    );
  }
}

ReactDOM.render(<Splash />, document.getElementById('root'));
