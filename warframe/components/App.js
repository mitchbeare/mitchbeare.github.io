import Menu from 'menu';

class App extends React.Component{
    render(){
        return(
            <Menu />
            <div className="grid-x">
                <div className="cell">
                    <h1> Hello from React to Warframe </h1>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);