//creating a new application
///this is the app.js our entry point
import FeedbackData from './components/Data';
import { useState } from 'react';
import FeedbackList from './components/FeedbackList';
//importing the uuid component

import { v4 as uuidv4 } from 'uuid';
//importing the styles
import "./style.css"
import FeedbackStats from './components/FeedbackStats';
import Form from './components/Form';
function App(){
    const [feedback, setFeedback] = useState(FeedbackData);
    //function to delete on click

    
        const handleDelete = (id) => {
            if(window.confirm("Are you sure you want to Delete? ")){
            const a = feedback.filter(
                (item)=> item.id !== id
            )
            setFeedback(a)
    
            }
        }


        //function to handle the addition of data


        const addFeedback = (newFeedback) => {
            newFeedback.id = uuidv4()
            setFeedback([newFeedback, ...feedback])
        }
    return(
        <div className="container">
            <Form handleAdd={addFeedback}/>
            <FeedbackStats item={feedback}/>
            <FeedbackList item={feedback} handleDelete={handleDelete}/>
        </div>
    )
}
export default App
