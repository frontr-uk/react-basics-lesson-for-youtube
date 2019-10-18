import React from "react"

function TodoItem(props) {
    console.log(props)
        return (
            <div>
                <input type="checkbox"></input>
                <strong> {props.item.label}</strong>
                | {props.item.location}
            </div>
        )
}

export default TodoItem