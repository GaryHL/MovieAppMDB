import React from 'react'
import './loader.scss'

function loader_welcome () {
  return (
    <div className="loader_welcome">
        <h1>MOVIE APP</h1>
        <div className="loading_bar">
            <div className="progress"></div>
        </div>
    </div>
  )
}

export default loader_welcome