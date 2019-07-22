class DailyTasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.loadData('/warframe/data/dailies.json');
  }

  loadData(url) {
    var json = null;
    jQuery.ajax({
      async: false,
      global: false,
      url: url,
      dataType: 'json',
      success: function(data) {
        json = data;
      }
    });
    return json;
  }

  checkData() {
    //todo: Check JSON against stored cookie for updates.
  }

  updateData() {
    //todo: Function to update JSON from website if changed.
  }

  resetClicked = e => {
    e.preventDefault();
    console.log('reset was clicked');
  };

  taskChecked = (e, name) => {
    e.preventDefault();
    var index = this.state.objectives.indexOf(
      this.state.objectives.find(task => task.name === name)
    );

    const newtasks = this.state.objectives.slice();
    newtasks[index].value = true;
    this.setState({
      objectives: newtasks
    });
  };

  render() {
    return (
      <div className="cell">
        <h2>Daily Checklist</h2>
        <ul>
          {this.state.objectives.map(task => (
            <li key={task.name}>
              <input
                id={task.name + 'Check'}
                type="checkbox"
                onClick={e => this.taskChecked(e, task.name)}
              />
              <label htmlFor={task.name + 'Check'}>{task.name}</label>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="button"
          onClick={e => this.resetClicked(e)}
        >
          reset
        </button>
      </div>
    );
  }
}
