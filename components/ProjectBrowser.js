class ProjectBrowser extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tiles = [
        {title: "Portfolio Website", imgSrc: "https://via.placeholder.com/30/" }
      ]
    }
  }
  
  render() {
    return (
      <div>
        <div className="flex flex-col">
          <div className="flex my-10">
            <ProjectTile
              Title="Portfolio Website"
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
          </div>
          <div className="flex my-10">
            <ProjectTile
              Title="Project 4"
              imgSrc="https://via.placeholder.com/30/"
            />
            <ProjectTile
              Title="Project 5"
              imgSrc="https://via.placeholder.com/30/"
            />
            <ProjectTile
              Title="Project 6"
              imgSrc="https://via.placeholder.com/30/"
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<ProjectBrowser />, document.getElementById('root'));
