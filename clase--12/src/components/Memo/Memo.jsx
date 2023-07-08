import React from 'react'

const Memo = React.memo((props) => {
    return (
      <div>
        <h1>{props.titulo}</h1>
        <p>{props.texto}</p>
      </div>
    )
  }
)

export default Memo