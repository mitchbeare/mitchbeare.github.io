import Menu from 'menu';

class App extends React.Component{
    render(){
        return(
            <Menu />
                <h1> Hello from React to Warframe </h1>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);