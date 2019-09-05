class Splash extends React.Component {
  render() {
    return (
      <div>
        <div className="flex flex-col">
          <div className="flex my-10">
            <ProjectTile
              Title="Project 1"
              imgSrc="https://via.placeholder.com/30/"
            />
            <ProjectTile
              Title="Project 2"
              imgSrc="https://via.placeholder.com/30/"
            />
            <ProjectTile
              Title="Project 3"
              imgSrc="https://via.placeholder.com/30/"
            />
            <ProjectTile
              Title="Project 4"
              imgSrc="https://via.placeholder.com/30/"
            />
          </div>
          <div>
            <ProjectTile
              Title="Project 5"
              imgSrc="https://via.placeholder.com/30/"
            />
            <ProjectTile
              Title="Project 6"
              imgSrc="https://via.placeholder.com/30/"
            />
            <ProjectTile
              Title="Project 7"
              imgSrc="https://via.placeholder.com/30/"
            />
            <ProjectTile
              Title="Project 8"
              imgSrc="https://via.placeholder.com/30/"
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Splash />, document.getElementById('root'));
