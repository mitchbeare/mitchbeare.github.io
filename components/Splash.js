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
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Splash />, document.getElementById('root'));
