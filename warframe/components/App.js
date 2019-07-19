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
                    <div className="cell">
                        <h3>Stage 1 New Player grind</h3>
                    </div>
                    <div className="cell-6">
                        <ol>
                            <li><input id="item1" type="checkbox" /><label for="item1">Complete Vor's Prize Quest</label></li>
                            <li><input id="item2" type="checkbox" /><label for="item2">Complete All missions on Earth</label></li>
                        </ol>
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