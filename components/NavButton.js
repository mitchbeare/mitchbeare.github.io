class NavButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false,
                  style: 'hover:bg-blue-700' };
    this.handleHover = this.handleHover.bind(this)
  }

  handleHover = event => {
    this.setState(prevState => ({
      isHovered: !prevState.isHovered
    }));
  }

  render() {
    return (
      <div
        className="flex-auto"
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
      >
        <a className={this.state.style} href={this.props.link}>
          {this.props.text}
        </a>
      </div>
    );
  }
}
