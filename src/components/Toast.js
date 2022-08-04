import React from 'react'

export default function Toast(props) {
  return (
    <div id="toast" className="toast fade hide position-fixed end-0 bottom-0 me-4 mb-4" role="alert" aria-live="assertive" aria-atomic="true">
      <div className="toast-header">
          <strong className="me-auto">TextUtils</strong>
          <small className="text-muted">Just Now</small>
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div className="toast-body">
        {props.message}
      </div>
    </div>
  )
}
