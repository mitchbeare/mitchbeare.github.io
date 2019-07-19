//import Menu from './menu.js';

class App extends React.Component{
    render(){
        return(
            <div>
                <WarMenu />
                <div className="grid-x">
                    <div className="cell">
                        <h1> My Site Where I do stuff. </h1>
                    </div>
                    <div className="cell">
                        <DailyTasks />
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