import React, { useEffect } from 'react'

function Todo() {

  useEffect(() => {
    console.log("hello effect")
  }, [])

  return (
    <div>
      <h1>  </h1>
    </div>
  )
}

export default Todo
