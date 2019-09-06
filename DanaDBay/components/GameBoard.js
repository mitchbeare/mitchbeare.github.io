class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      divStyle: {
        position: absolute,
        top: 0,
        left: 0,
        height: 100,
        width: 100,
        ZIndex: -1,
        backgroundImage: `url('https://mitchellbeare.info/DanaDBay/assets/Background.jpg')`
      }
    };
  }

  render() {
    return (
      <div className="bg-fixed" style={this.state.divStyle}>
        <h2>DM's Control Board</h2>
        <div id="SoundBoard" className="flex bg-gray-200">
          <SoundButton text="Morse Code" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<GameBoard />, document.getElementById('root'));
