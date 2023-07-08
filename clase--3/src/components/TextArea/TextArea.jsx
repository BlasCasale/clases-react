import React from 'react'

const TextArea = (props) => {
    return (
        <div>
            <label> {props.label} </label> <br />
            <textarea></textarea>
            <br />
        </div>
    )
}

export default TextArea
