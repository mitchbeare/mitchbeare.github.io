class Footer extends React.Component {
  render() {
    return (
      <div className="w-full mx-auto" style={{ backgroundColor: '#16a085' }}>
        <header>
          <div>
            <p>Lets see what mess this makes.</p>
          </div>
        </header>

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
          <p className="text-xs">
            Powered by{' '}
            <a
              className="underline hover:cursor-pointer hover:italic"
              href="https://reactjs.org/"
            >
              React
            </a>{' '}
            with{' '}
            <a
              className="underline hover:cursor-pointer hover:italic"
              href="https://tailwindcss.com/"
            >
              Tailwind CSS
            </a>
          </p>
        </div>
      </div>
    );
  }
}