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
    const newobj = this.state.objectives.slice();
    newobj.map(task => {
      task.value = false;
    });
    this.setState({
      objectives: newobj
    });
  };

  handleChange = (e, name) => {
    var index = this.state.objectives.indexOf(
      this.state.objectives.find(task => task.name === name)
    );
    const newobj = this.state.objectives.slice();
    newobj[index].value = e.target.checked;
    this.setState({
      objectives: newobj
    });
  };

  render() {
    return (
      <div className="cell large-offset-3">
        <div className="card dailycard">
          <div className="card-divider">
            <h2>Daily Checklist</h2>
          </div>
          <div className="card-section">
            <ul>
              {this.state.objectives.map(task => (
                <li key={task.name}>
                  <input
                    id={task.name + 'Check'}
                    type="checkbox"
                    checked={!!task.value}
                    onChange={e => this.handleChange(e, task.name)}
                  />
                  <label htmlFor={task.name + 'Check'}>{task.name}</label>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-divider">
            <button
              type="button"
              className="button"
              onClick={e => this.resetClicked(e)}
            >
              reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}
