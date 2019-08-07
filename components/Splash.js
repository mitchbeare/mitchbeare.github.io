class Splash extends React.Component {
  render() {
    return (
      <div>
        <div className="flex px-4 py-2 w-screen sm:mx-1 md:mx-4 lg:mx-7 xl:mx-10">
          <div className="flex-auto w-2/5 bg-white rounded-lg shadow-xl m-2 h-full">
            <AboutPanel />
          </div>
          <div className="flex-auto w-2/5 flex flex-col m-2">
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
      </div>
    );
  }
}

ReactDOM.render(<Splash />, document.getElementById('root'));
