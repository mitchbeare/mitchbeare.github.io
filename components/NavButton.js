class NavButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      style: 'hover:underline'
    };
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
