import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const AddTask = (props) => (
    <div>
      <TextField
        type="text"
        floatingLabelText="New task name"
        value={props.newTaskText}
        onChange={props.onNewTaskTextChangeHandler}
        fullWidth={true}
      />
      <RaisedButton
        onClick={props.addTask}
        label="Add task!"
        primary={true}
        fullWidth={true}
      />
    </div>
  )
export default AddTask