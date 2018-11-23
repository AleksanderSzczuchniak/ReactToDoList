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
                onClick={props.onAllClickHandler}
            >
                ALL
                </button>
            <button
                onClick={props.onCompletedClickHandler}
            >
                COMPLETE
                </button>
            <button
                onClick={props.onUnCompletedClickHandler}
            >
                UNCOMPLETE
                </button>
        </div>
    </div>

)

export default Search