class SoundButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSound(audioFile) {
    var audio = new Audio(audioFile);
    audio.play;
  }

  render() {
    return (
      <div className="flex-auto">
        <button
          className="bg-gray-500 font-bold py-2 px-4"
          onClick={this.handleSound(this.props.audio)}
        >
          {this.props.text}
        </button>
      </div>
    );
  }
}
