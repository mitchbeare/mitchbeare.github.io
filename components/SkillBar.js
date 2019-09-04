class SkillBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHovering: false };
  }

  handleMouseHover = event => {
    this.setState(this.toggleHoverState);
  };

  toggleHoverState = () => {
    return {
      isHovering: !this.state.isHovering
    };
  };

  render() {
    return (
      <div>
        <h2>{this.props.skillName}</h2>
        <div
          className="shadow w-full bg-grey-light mt-2"
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          <div
            className="bg-blue text-xs leading-none py-1 text-center text-white"
            style={{
              width: `${this.props.fill}`,
              backgroundColor: `${this.props.barColor}`
            }}
          >
            {this.state.isHovering ? this.props.text : null}
          </div>
        </div>
      </div>
    );
  }
}
