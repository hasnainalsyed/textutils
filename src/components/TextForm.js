import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

  const handleUpClick = () => {
    let upperCaseText = text.toUpperCase();
    setText(upperCaseText);
  }
  const handleLowClick = () => {
    let lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter text here..!');

  return (
    <div className='container-xl mt-5'>
      <div className="wrapper bg-light p-5 rounded-5">
        <h3 className='text-dark mb-4'> {props.heading} </h3>
        <div className="mb-4">
          <textarea className="form-control rounded-3" value={text} onChange={handleOnChange} id="textArea" rows="7"></textarea>
        </div>
        <button className="btn btn-primary me-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary" onClick={handleLowClick}>Convert to lowercase</button>
      </div>
    </div>
  )
}

TextForm.propTypes = {
  heading: PropTypes.string
}
