class BegginerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listitems: [] };
    let list = this.intializeList();
  }

  intializeList() {
    if (
      this.state.listitems.length === 0 ||
      this.state.listitems === null ||
      this.state.listitems === undefined
    ) {
      return <h1>No list items found</h1>;
    }
  }

  render() {
    <div>
      <h1>temporary disabling</h1>
    </div>;
  }
}
