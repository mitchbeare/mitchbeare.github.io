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
        <div className="grid-x">
          <div className="cell">
            <h1> My Site Where I do stuff. </h1>
          </div>
          <div className="cell">
            <DailyTasks />
          </div>
          <div className="cell">
            <h3>Stage 1 New Player grind</h3>
          </div>
          <div className="cell-6">
            <ol>
              <li>
                <input
                  id="item1"
                  type="checkbox"
                  onClick={e => this.saveCheck(e)}
                />
                <label htmlFor="item1">Complete Vor's Prize Quest</label>
              </li>
              <li>
                <input
                  id="item2"
                  type="checkbox"
                  onClick={e => this.saveCheck(e)}
                />
                <label htmlFor="item2">Complete All missions on Earth</label>
              </li>
              <li>
                <input
                  id="item3"
                  type="checkbox"
                  onClick={e => this.saveCheck(e)}
                />
                <label htmlFor="item3">Farm Mods from Earth</label>
                <ul>
                  <li>
                    <input
                      id="earthitem1"
                      type="checkbox"
                      onClick={e => this.saveCheck(e)}
                    />
                    <label htmlFor="earthitem1">
                      Ivara systems blue print from Cambria. (third vault 9.09%
                      chance)
                    </label>
                  </li>
                  <li>
                    <input
                      id="earthitem2"
                      type="checkbox"
                      onClick={e => this.saveCheck(e)}
                    />
                    <label htmlFor="earthitem2">
                      Farm Vicious Frost from Cambria. (third vault 9.09%
                      chance)
                    </label>
                  </li>
                  <li>
                    <input
                      id="earthitem3"
                      type="checkbox"
                      onClick={e => this.saveCheck(e)}
                    />
                    <label htmlFor="earthitem3">
                      Farm Volcanic edge from Cambria. (third vault 9.09%
                      chance)
                    </label>
                  </li>
                  <li>
                    <input
                      id="earthitem4"
                      type="checkbox"
                      onClick={e => this.saveCheck(e)}
                    />
                    <label htmlFor="earthitem4">
                      Farm Hornet strike from Cambria. (third vault 9.09%
                      chance)
                    </label>
                  </li>
                  <li>
                    <input id="earthitem5" type="checkbox" />
                    <label htmlFor="earthitem5">
                      Farm Serration from Cambria. (third vault 9.09% chance)
                    </label>
                  </li>
                  <li>
                    <input
                      id="earthitem6"
                      type="checkbox"
                      onClick={e => this.saveCheck(e)}
                    />
                    <label htmlFor="earthitem6">
                      Farm Intensify from Everest. (third excavator 8.33%
                      chance)
                    </label>
                  </li>
                </ul>
              </li>
              <li>
                <input
                  id="item4"
                  type="checkbox"
                  onClick={e => this.saveCheck(e)}
                />
                <label htmlFor="item4">
                  Unlock and complete the Venus junction
                </label>
              </li>
            </ol>
          </div>
          <div className="cell-6">
            <BegginerList />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
