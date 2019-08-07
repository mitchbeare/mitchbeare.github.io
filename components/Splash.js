class Splash extends React.Component {
  render() {
    return (
      <div>
        <div className="flex px-4 py-2 w-screen">
          <div className="flex-auto w-1/3 bg-white rounded-lg shadow-xl m-2 h-full">
            <AboutPanel />
          </div>
          <div className="flex-auto w-2/3 flex flex-col m-2">
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
            <i className="fas fas-facebook-square" />
            <i className="fas fas-linkedin" />
            <i className="fas fas-github-square" />
            <p>Powered by React with Tailwind CSS</p>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Splash />, document.getElementById('root'));
