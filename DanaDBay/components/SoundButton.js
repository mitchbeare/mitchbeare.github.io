class SoundButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSound() {
    var audio = new Audio(this.props.audio);
    audio.play;
  }

  render() {
    return (
      <div className="flex-auto">
        <button
          className="bg-gray-500 font-bold py-2 px-4"
          onClick={this.handleSound}
        >
          {this.props.text}
        </button>
      </div>
    );
  }
}
