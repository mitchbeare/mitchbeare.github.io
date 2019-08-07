class Splash extends React.Component {
  render() {
    return (
      <div className="flex px-4 py-2 w-screen">
        <div className="w-1/3 bg-white rounded-lg shadow-xl mx-auto h-full p-6 flex-grow">
          <AboutPanel />
        </div>
        <div className="w-2/3 flex flex-col">
          <WorkPanel />
          <EducationPanel />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Splash />, document.getElementById('root'));
