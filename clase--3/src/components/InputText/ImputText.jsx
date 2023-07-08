import React from 'react'

const ImputText = (props) => {
    return (
        <div>
            <label> {props.label}: </label>
            <input type="text" />
            <br /><br />
        </div>
    )
}

export default ImputText
