class ProjectTile extends React.Component {
  render() {
    return (
      <div className="flex flex-col bg-white rounded-lg p-6 w-1/3 h-64">
        <div className="flex flex-auto">
          <img className="h-16 w-15 md:h-24 md:w-24 rounded-full mx-auto"></img>
          <div>Title</div>
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
