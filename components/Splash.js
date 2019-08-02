class Splash extends React.Component {
  render() {
    return (
      <div className="flex mx-4 my-2">
        <div className="w-1/3 bg-red-100">
          <h1>Mitchell Beare</h1>
        </div>
        <div className="w-2/3 bg-green-100">
          <h1>Work Experience</h1>
        </div>
        <div className="w-2/3 bg-blue-100">
          <h1>Education</h1>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Splash />, document.getElementById('root'));
