import React from 'react'


class ToDo extends React.Component {
    state ={
        task: [],
        filterText: '',
        chosenFilter: 'ALL',
        newTaskText: ''
    }

    createTask = text => ({
        taskText: text,
        isCompleted: false,
        key: Date.now()
    })

    addTask = () => this.setState({
        tasks: this.setState.tasks.concat(
            this.createTask(
                this.state.newTaskText
            )
        )
    })
    deleteTask = taskKey => this.setState({
        task:this.state.task.filter(
            task => task.key !== taskKey
        )
    })
    completeTask = taskKey => this.setState({
        task: this.state.task.map(
            task => (
                (task.key === taskKey) ?
                {
                    ...task,
                    isCompleted: true
                }
                :
                task
            )
        )
    })

    render(){
        return(
            <div>
                ToDo
            </div>
        )
    }
}
export default ToDo