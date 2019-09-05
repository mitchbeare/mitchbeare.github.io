class ProjectTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="flex flex-col bg-white rounded-lg p-6 w-full h-64 mx-10">
        <div className="relative flex flex-auto">
          <img
            className="static top-0 left-0 w-1/3 h-1/3"
            href="https://via.placeholder.com/50"
          ></img>
          <div className="ml-2">
            <h2>{this.props.Title}</h2>
            <p>Tags</p>
          </div>
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
