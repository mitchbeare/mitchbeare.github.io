class App extends React.Component {
  state = { checkboxstate: [{ item1: false }, { item2: false }] };

  saveCheck(e) {
    e.preventDefault();
    console.log(e, 'event info');
  }

  render() {
    return (
      <div>
        <WarMenu />
        <div className="contentArea">
          <div className="grid-x">
            <div className="cell">
              <h1> My Site Where I do stuff. </h1>
            </div>
              <DailyTasks />
            <hr />
            <div className="cell">
              <BegginerList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
