
import { FaTimes } from 'react-icons/fa';
function FeedbackItem({item, handleDelete}) {

  return (
    <div className="card">
        <div className="num-display">{item.rating}</div>
        <div onClick={(id)=>handleDelete(item.id)}className="close"><FaTimes /></div>
        <div className="text-display">{item.text}</div>


    </div>    
  )
}

export default FeedbackItem