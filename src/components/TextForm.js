import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

  const handleUpClick = () => {
    setText(text.toUpperCase());
  }

  const handleLowClick = () => {
    setText(text.toLowerCase());
  }

  const handleClearClick = () => {
    setText('');
  }

  const handleCapClick = () => {
    const separateWord = text.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
      separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
      separateWord[i].substring(1);
    }
    const newStr = separateWord.join(' ');
    setText(newStr);
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const [text, setText] = useState('');

  return (
    <div className='container-xl mt-5'>
      <div className="wrapper bg-light p-5 rounded-5">
        <h3 className='text-dark mb-4'> {props.heading} </h3>
        <div className="mb-4">
          <textarea className="form-control rounded-3" value={text} onChange={handleOnChange} id="textArea" rows="7"></textarea>
        </div>
        <button className="btn btn-primary me-3" onClick={handleUpClick}>CONVERT TO UPPERCASE</button>
        <button className="btn btn-primary me-3" onClick={handleLowClick}>convert to lowercase</button>
        <button className="btn btn-primary me-3" onClick={handleCapClick}>Captlize All</button>
        <button className="btn btn-danger" onClick={handleClearClick}>Clear..!</button>
      </div>

      <div className="wrapper my-4">
        <h3>Your text summery</h3>
        <p className='fs-6 fst-italic text-success lh-sm mb-2'>{text.split(' ').length} words and {text.length} characters</p>
        <p className='fs-6 fst-italic text-success lh-sm'>{0.008 * text.split(' ').length} Minutes to read</p>
      </div>

      <div className="wrapper my-4">
        <h3>Preview</h3>
        <p className='fs-6 fst-italic text-success lh-sm'>{text}</p>
      </div>
    </div>
  )
}

TextForm.propTypes = {
  heading: PropTypes.string
}
