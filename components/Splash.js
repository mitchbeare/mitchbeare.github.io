class Splash extends React.Component {
  render() {
    return (
      <div>
        <div className="flex flex-col sm:flex sm:flex-row w-screen overflow-visible sm:mx-1 md:mx-2 lg:mx-4 xl:mx-8">
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
            <a
              className="mx-1"
              href="https://www.facebook.com/mitchell.beare.1?ref=bookmarks"
            >
              <i className="fab fa-facebook" />
            </a>
            <a
              className="mx-1"
              href="https://www.linkedin.com/in/mitchell-beare-0002b6151/"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a className="mx-1" href="https://github.com/mitchbeare">
              <i className="fab fa-github" />
            </a>
            <p>
              Powered by <a href="https://reactjs.org/">React</a> with{' '}
              <a href="https://tailwindcss.com/">Tailwind CSS</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Splash />, document.getElementById('root'));
