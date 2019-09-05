class NavButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHover: false, style: 'underlined' };
  }

  handleMouseHover = event => {
    this.setState(this.toggleHoverState);
  };

  toggleHoverState = () => {
    return {
      isHovering: !this.state.isHovering,
      style: 'text-red-700'
    };
  };

  render() {
    return (
      <div
        className="flex-auto"
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        <a className={this.state.style} href={this.props.ref}>
          {this.props.text}
        </a>
      </div>
    );
  }
}
