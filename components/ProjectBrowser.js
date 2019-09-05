class Splash extends React.Component {
  render() {
    return (
      <div>
        <div>
          <ProjectTile />
          <ProjectTile />
          <ProjectTile />
          <ProjectTile />
        </div>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Splash />, document.getElementById('root'));
