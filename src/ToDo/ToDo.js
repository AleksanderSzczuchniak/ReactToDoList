import React from 'react'


class ToDo extends React.Component {
    state ={
        task: [],
        filterText: '',
        chosenFilter: 'ALL',
        newTaskText: ''
    }
    render(){
        return(
            <div>
                ToDo
            </div>
        )
    }
}
export default ToDo