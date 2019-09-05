class ProjectTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="flex flex-col bg-white rounded-lg p-6 w-1/3 h-64 mx-10">
        <div className="flex flex-auto">
          <img
            className="h-16 w-15 md:h-24 md:w-24 rounded-full mx-auto"
            href="https://via.placeholder.com/50"
          ></img>
          <div>
            <h3>{this.props.Title}</h3>
          </div>
          <div>Tags</div>
        </div>
        <div className="flex-auto">
          <p>A Blurb about the project here</p>
        </div>
        <div className="flex-auto">
          <a>A Link to the page</a>
        </div>
      </div>
    );
  }
}
