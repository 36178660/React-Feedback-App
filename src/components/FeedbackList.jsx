import React from 'react'
import FeedbackItem from './FeedbackItem';

function FeedbackList(props) {
  return (
    <div className="container">
        {props.item.map((items,index)=>(
            <FeedbackItem item={items} key={index} handleDelete={props.handleDelete}/>
        ))}
    </div>
  )
}

export default FeedbackList