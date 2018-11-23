import React from 'react'

import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { ListItem } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'

const completedStyle = {
  textDecoration: 'underline overline wavy blue'
}

const Task = (props) => (
  <ListItem
    style={props.task.isCompleted ? completedStyle : {}}
    onClick={() => props.toggleTask(props.task.key)}
    primaryText={props.task.taskText}
    rightIconButton={
      <IconButton>
        <DeleteIcon
          onClick={() => props.deleteTask(props.task.key)}
        />
      </IconButton>
    }
  >
  </ListItem>
)

export default Task