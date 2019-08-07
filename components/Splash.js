class Splash extends React.Component {
  render() {
    return (
      <div>
        <div className="flex px-4 py-2 w-screen">
          <div className="flex-auto w-2/5 bg-white rounded-lg shadow-xl m-2 h-full">
            <AboutPanel />
          </div>
          <div className="flex-auto w-3/5 flex flex-col m-2">
            <WorkPanel />
            <EducationPanel />
          </div>
        </div>
        <div
          className="w-full mx-auto rounded-lg"
          style={{ backgroundColor: '#16a085' }}
        >
          <div className="w-full p-2 text-center">
            <p>Find me on social media</p>
            <a href="https://www.facebook.com/mitchell.beare.1?ref=bookmarks">
              <i className="fas fa-facebook-square" />
            </a>
            <a href="https://www.linkedin.com/in/mitchell-beare-0002b6151/">
              <i className="fas fa-linkedin" />
            </a>
            <a href="https://github.com/mitchbeare">
              <i className="fas fa-github-square" />
            </a>
            <p>Powered by React with Tailwind CSS</p>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Splash />, document.getElementById('root'));
