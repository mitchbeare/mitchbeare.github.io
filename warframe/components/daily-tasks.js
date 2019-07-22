class DailyTasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.loadData();
  }

  loadData() {
    jQuery.getJSON('/warframe/data/dailies.json', function(data) {
      return data;
    });
  }

  checkData() {
    //todo: Check JSON against stored cookie for updates.
  }

  updateData() {
    //todo: Function to update JSON from website if changed.
  }

  buttonClicked() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Daily Checklist</h1>
        <ul>
          {this.state.objectives.map(item => (
            <li>{item}</li>
          ))}
        </ul>
        <button type="button" onClick={this.buttonClicked()}>
          test
        </button>
      </div>
    );
  }
}
