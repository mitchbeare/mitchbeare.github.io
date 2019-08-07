class SkillBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>{this.props.skillName}</h2>
        <div className="shadow w-full bg-grey-light mt-2">
          <div
            className="bg-blue text-xs leading-none py-1 text-center text-white"
            style={{
              width: `${this.props.fill}`,
              backgroundColor: `${this.props.barColor}`
            }}
          >
            {this.props.text}
          </div>
        </div>
      </div>
    );
  }
}
