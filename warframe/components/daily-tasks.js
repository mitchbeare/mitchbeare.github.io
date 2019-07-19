class DailyTasks extends React.Component{
    state = {tasks: [
        {syndicate: false},
        {cephalon: false},
        {sorties: false},
        {cetus: false},
        {orbvallis: false},
    ]}

    render(){
        return(
            <div>
                <h1>Daily Checklist</h1>
                <ul>
                    <li> Hello List</li>
                </ul>
            </div>
        )
    }
}