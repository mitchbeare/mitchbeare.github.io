class App extends React.Component {
  state = {};

  saveCheck(e) {
    e.preventDefault();
    console.log(e, 'was clicked');
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
                <input id="item1" type="checkbox" onClick={saveCheck} />
                <label for="item1">Complete Vor's Prize Quest</label>
              </li>
              <li>
                <input id="item2" type="checkbox" onClick={saveCheck} />
                <label for="item2">Complete All missions on Earth</label>
              </li>
              <li>
                <input id="item3" type="checkbox" onClick={saveCheck} />
                <label for="item3">Farm Mods from Earth</label>
                <ul>
                  <li>
                    <input
                      id="earthitem1"
                      type="checkbox"
                      onClick={saveCheck}
                    />
                    <label for="earthitem1">
                      Ivara systems blue print from Cambria. (third vault 9.09%
                      chance)
                    </label>
                  </li>
                  <li>
                    <input
                      id="earthitem2"
                      type="checkbox"
                      onClick={saveCheck}
                    />
                    <label for="earthitem2">
                      Farm Vicious Frost from Cambria. (third vault 9.09%
                      chance)
                    </label>
                  </li>
                  <li>
                    <input
                      id="earthitem3"
                      type="checkbox"
                      onClick={saveCheck}
                    />
                    <label for="earthitem3">
                      Farm Volcanic edge from Cambria. (third vault 9.09%
                      chance)
                    </label>
                  </li>
                  <li>
                    <input
                      id="earthitem4"
                      type="checkbox"
                      onClick={saveCheck}
                    />
                    <label for="earthitem4">
                      Farm Hornet strike from Cambria. (third vault 9.09%
                      chance)
                    </label>
                  </li>
                  <li>
                    <input id="earthitem5" type="checkbox" />
                    <label for="earthitem5">
                      Farm Serration from Cambria. (third vault 9.09% chance)
                    </label>
                  </li>
                  <li>
                    <input
                      id="earthitem6"
                      type="checkbox"
                      onClick={saveCheck}
                    />
                    <label for="earthitem6">
                      Farm Intensify from Everest. (third excavator 8.33%
                      chance)
                    </label>
                  </li>
                </ul>
              </li>
              <li>
                <input id="item4" type="checkbox" onClick={saveCheck} />
                <label for="item4">
                  Unlock and complete the Venus junction
                </label>
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
