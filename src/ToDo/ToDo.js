import React from 'react'
import AddTask from './AddTask'
import List from './List'
import Search from './Search'


class ToDo extends React.Component {
    state = {
        tasks: [],
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
        tasks: this.state.tasks.concat(
            this.createTask(
                this.state.newTaskText
            )
        ),
        newTaskText: ''
    })
    deleteTask = taskKey => this.setState({
        tasks: this.state.tasks.filter(
            task => task.key !== taskKey
        )
    })
    completeTask = taskKey => this.setState({
        tasks: this.state.tasks.map(
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
    onAllClickHandler = () => this.setState({ chosenFilter: 'ALL' })
    onCompletedClickHandler = () => this.setState({ chosenFilter: 'COMPLETED' })
    onUnCompletedClickHandler = () => this.setState({ chosenFilter: 'UNCOMPLETED' })

    onFilterTextChangeHandler = event => this.setState({ filterText: event.target.value })
    onNewTaskTextChangeHandler = event => this.setState({ newTaskText: event.target.value })

    render() {
        return (
            <div>
                <AddTask
                    newTaskText={this.state.newTaskText}
                    onNewTaskTextChangeHandler={this.onNewTaskTextChangeHandler}
                    addTask={this.addTask}
                />
                <List
                    tasksList={this.state.tasks}
                    completeTask={this.completeTask}
                    deleteTask={this.deleteTask}
                />
                <Search
                    filterText={this.state.filterText}
                    onFilterTextChangeHandler={this.onFilterTextChangeHandler}
                    onAllClickHandler={this.onAllClickHandler}
                    onCompletedClickHandler={this.onCompletedClickHandler}
                    onUnCompletedClickHandler={this.onUnCompletedClickHandler}
                />
            </div>
        )
    }
}
export default ToDo