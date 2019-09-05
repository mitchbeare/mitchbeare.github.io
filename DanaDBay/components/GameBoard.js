class GameBoard extends React.Component {
  render() {
    return (
      <div>
        <h2>DM's Control Board</h2>
        <div id="SoundBoard" className="">
            <div></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Splash />, document.getElementById('root'));
