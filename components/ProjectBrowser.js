class Splash extends React.Component {
  render() {
    return (
      <div>
        <div className="flex flex-col">
          <div className="flex my-10">
            <ProjectTile Title="Project 1" />
            <ProjectTile Title="Project 2" />
            <ProjectTile Title="Project 3" />
            <ProjectTile Title="Project 4" />
          </div>
          <div>
            <ProjectTile Title="Project 5" />
            <ProjectTile Title="Project 6" />
            <ProjectTile Title="Project 7" />
            <ProjectTile Title="Project 8" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Splash />, document.getElementById('root'));
