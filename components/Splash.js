class Splash extends React.Component {
  render() {
    return (
        <div className="flex px-4 py-2 w-screen overflow-visible sm:mx-40 md:mx-48 lg:mx-56 xl:mx-64">
          <div className="flex-auto w-auto bg-white rounded-lg shadow-xl m-2 h-full">
            <AboutPanel />
          </div>
          <div className="flex-auto w-auto flex flex-col m-2">
            <WorkPanel />
            <EducationPanel />
          </div>
        </div>
        <div className="w-full mx-auto" style={{ backgroundColor: '#16a085' }}>
          <div className="w-full p-2 text-center">
            <p>Find me on social media</p>
            <a href="https://www.facebook.com/mitchell.beare.1?ref=bookmarks">
              <i className="fas fa-facebook" />
            </a>
            <a href="https://www.linkedin.com/in/mitchell-beare-0002b6151/">
              <i className="fas fa-linkedin" />
            </a>
            <a href="https://github.com/mitchbeare">
              <i className="fas fa-github" />
            </a>
            <p>
              Powered by <a href="https://reactjs.org/">React</a> with{' '}
              <a href="https://tailwindcss.com/">Tailwind CSS</a>
            </p>
          </div>
        </div>
    );
  }
}

ReactDOM.render(<Splash />, document.getElementById('root'));
