import React,{useState } from 'react'

import Button from './Button';
import Rating from './Rating';
function Form({handleAdd}) {
  
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')


    const handleChange = (event) => {

        if(event.target.value === ''){
            setBtnDisabled(true)
            setMessage(null)
        }else if (event.target.value !== '' && event.target.value.trim().length <= 10){
            setBtnDisabled(true)
            setMessage('Text must be atleast 10 characters!')
        }else{
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(event.target.value)
    }


// Function to handle submit

const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10){
        const newFeedback = {
            text,
            rating,
        }

        handleAdd(newFeedback)
    }
}


const addFeedback = (newFeedback) => {}

    return (

    <form action="" className="card" onSubmit={handleSubmit}>
        <p className="form-title">
            How would you rate your service with us?
        </p>

        <Rating select={(rating) => setRating(rating)}/>
        <div className="input-group">
        <input onChange={handleChange} type="text" className="review"  placeholder='write a review' value={text}/>

        <Button  type="submit" isDisabled={btnDisabled}className='button-submit'>Send</Button>
        </div>
        {message &&
        <div className="message">{message}</div>
        }



    </form>
  )
}

export default Form