import React from 'react'

const Search = (props) => (
    <div>
        <div>
            <input
                type='text'
                placeholder="Filter Task"
                value={props.filterText}
                onChange={props.onFilterTextChangeHandler}
            />
        </div>
        <div>
            <button
                disabled={props.chosenFilter === 'ALL'}
                onClick={props.onAllClickHandler}
            >
                ALL
                </button>
            <button
                disabled={props.chosenFilter === "COMPLETED"}
                onClick={props.onCompletedClickHandler}
            >
                COMPLETE
                </button>
            <button
                disabled={props.chosenFilter === "UNCOMPLETED"}
                onClick={props.onUnCompletedClickHandler}
            >
                UNCOMPLETE
                </button>
        </div>
    </div>

)

export default Search