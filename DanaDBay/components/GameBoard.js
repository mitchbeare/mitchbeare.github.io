class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      divStyle: {
        backgroundImage: `url('https://mitchellbeare.info/DanaDBay/assets/Background.jpg')`
      }
    };
  }

  render() {
    return (
      <div className="background" style={this.state.divStyle}>
        <h2>DM's Control Board</h2>
        <div id="SoundBoard" className="flex bg-gray-200">
          <SoundButton
            text="Morse Code"
            audioFile="url('https://mitchellbeare.info/DanaDBay/assets/Background.jpg')"
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<GameBoard />, document.getElementById('root'));
