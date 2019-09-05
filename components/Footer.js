class Footer extends React.Component {
  render() {
    return (
      <div className="w-full mx-auto" style={{ backgroundColor: '#16a085' }}>
        <div className="w-full p-2 text-center">
          <p>Find me on social media</p>
          <a
            className="mx-1"
            href="https://www.facebook.com/mitchell.beare.1?ref=bookmarks"
          >
            <i className="fab fa-facebook" />
          </a>
          <a
            className="mx-1"
            href="https://www.linkedin.com/in/mitchell-beare-0002b6151/"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a className="mx-1" href="https://github.com/mitchbeare">
            <i className="fab fa-github" />
          </a>
          <p>
            Powered by <a href="https://reactjs.org/">React</a> with{' '}
            <a href="https://tailwindcss.com/">Tailwind CSS</a>
          </p>
        </div>
      </div>
    );
  }
}
