class DailyTasks extends React.Component {
  constructor() {
    super(props);
    loadData();
    this.state = {};
  }

  loadData() {
    jQuery.getJSON('../data/dailies.json', function(data) {
      console.log(data);
      var objectives = [];
    });
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
