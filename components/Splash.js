class Splash extends React.Component {
  render() {
    return (
      <div class="container">
        <h1>Mitchell Beare</h1>
        <p>Hi, I'm a software developer in training.</p>

        <p>
          This site is still very much under construction so expect more soon!
        </p>

        <p>Look at this random circle</p>
        <svg>
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="black"
            stroke-width="3"
            fill="blue"
          />
        </svg>
      </div>
    );
  }
}
