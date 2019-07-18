class App extends React.Component{
    render(){
        return(
            <div className="pagecontent">
                <h1> Hello from React to Warframe </h1>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);