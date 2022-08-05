import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert('Converted to Uppercase', 'success');
  }

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert('Converted to Lowercase', 'success');
  }

  const handleClearClick = () => {
    setText('');
    props.showAlert('Cleared', 'danger');
  }

  const handleCapClick = () => {
    const separateWord = text.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
      separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
        separateWord[i].substring(1);
    }
    const newStr = separateWord.join(' ');
    setText(newStr);
    props.showAlert('Captlized', 'success');
  }

  const handleCopy = () => {
    let text = document.getElementById('textArea');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Coppied to clipboard', 'success');
  }

  const handleRemoveSpace = () => {
    let trimedText = text.split(/[ ]+/);
    setText(trimedText.join(' '));
    props.showAlert('Spaces removed', 'success');
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  function countWords(str) {
    const arr = str.split(' ');
    return arr.filter(word => word !== '').length;
  }

  const [text, setText] = useState('');

  return (
    <div className='container-xl mt-5'>
      <div className={`wrapper bg-${props.mode === 'light' ? 'light' : 'dark'} p-5 rounded-5`}>
        <h3 className={`text-${props.mode === 'light' ? 'black' : 'white'} mb-4`}> {props.heading} </h3>
        <div className="mb-4">
          <textarea className={`form-control rounded-3 bg-${props.mode === 'light' ? 'white' : 'dark'} text-${props.mode === 'light' ? 'black' : 'white'}`} value={text} onChange={handleOnChange} id="textArea" rows="7"></textarea>
        </div>
        <button className="btn btn-primary me-3" onClick={handleUpClick}>CONVERT TO UPPERCASE</button>
        <button className="btn btn-primary me-3" onClick={handleLowClick}>convert to lowercase</button>
        <button className="btn btn-primary me-3" onClick={handleCapClick}>Captlize All</button>
        <button className="btn btn-primary me-3" onClick={handleRemoveSpace}>Remove Extra Spaces</button>
        <button className="btn btn-success me-3" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-danger" onClick={handleClearClick}>Clear..!</button>
      </div>

      <div className={`wrapper my-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <h3>Your text summery</h3>
        <p className={`fs-6 fst-italic text-${props.mode === 'light' ? 'success' : 'info'} lh-sm mb-2`}>{countWords(text)} words and {text.length} characters</p>
        <p className={`fs-6 fst-italic text-${props.mode === 'light' ? 'success' : 'info'} lh-sm`}>{0.008 * countWords(text)} Minutes to read</p>
      </div>

      <div className={`wrapper my-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <h3>Preview</h3>
        <p className={`fs-6 fst-italic text-${props.mode === 'light' ? 'dark' : 'light'} lh-sm`}>{text.length > 0 ? text : 'Enter some text in the textbox above to preview here.!'}</p>
      </div>
    </div>
  )
}

TextForm.propTypes = {
  heading: PropTypes.string
}

TextForm.defaultProps = {
  heading: 'Heading goes here'
}

