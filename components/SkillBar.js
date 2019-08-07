class SkillBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="shadow w-full bg-grey-light mt-2">
        <div
          className="bg-blue text-xs leading-none py-1 text-center text-white"
          style={{ width: '45%' }}
        >
          45%
        </div>
      </div>
    );
  }
}
