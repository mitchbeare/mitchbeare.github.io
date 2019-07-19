//import Menu from './menu.js';

class App extends React.Component{
    render(){
        return(
            <div>
                <WarMenu />
                <div className="grid-x">
                    <div className="cell">
                        <h1> Hello from React to Warframe </h1>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);