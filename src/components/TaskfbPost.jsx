import React from 'react'
import PropTypes from 'prop-types'
export default function TaskfbPost({userName,message,picture}) {
  return (
    <div className="card">
    <div className="row g-0">
      <div className="col-md-4">
        <img src= {picture} className="img-fluid rounded-start" alt="..."  />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{userName}</h5>
          <p className="card-text">{message}</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
  )
}
TaskfbPost.propTypes = {userName : PropTypes.string, message : PropTypes.string}
