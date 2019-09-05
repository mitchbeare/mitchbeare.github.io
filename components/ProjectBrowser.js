class Splash extends React.Component {
  render() {
    return (
      <div>
        <div>
          <ProjectTile />
        </div>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Splash />, document.getElementById('root'));
