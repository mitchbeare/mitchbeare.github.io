class Splash extends React.Component {
  render() {
    return (
      <div>
        <div className="flex">
          <div className="w-1/5">
            <ProjectTile Title="Project 1" />
            <ProjectTile Title="Project 1" />
            <ProjectTile Title="Project 1" />
            <ProjectTile Title="Project 1" />
          </div>
          <div>
            <ProjectTile Title="Project 1" />
            <ProjectTile Title="Project 1" />
            <ProjectTile Title="Project 1" />
            <ProjectTile Title="Project 1" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Splash />, document.getElementById('root'));
