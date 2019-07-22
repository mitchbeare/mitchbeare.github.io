class DailyTasks extends React.Component {
  constructor(props) {
    super(props);
    this.loadData();
    this.state = {};
  }

  loadData() {
    jQuery.getJSON('/data/dailies.json', function(data) {
      console.log(data);
      var objectives = [];
    });
  }

  checkData() {
    //todo: Check JSON against stored cookie for updates.
  }

  updateData() {
    //todo: Function to update JSON from website if changed.
  }

  render() {
    return (
      <div>
        <h1>Daily Checklist</h1>
        <ul>
          <li> Hello List</li>
        </ul>
      </div>
    );
  }
}
