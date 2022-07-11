

function FeedbackStats({item}) {

    ///calculating the average of the posts using the reduce function of arrays

    let average = item.reduce((acc,cur)=>{
        return acc + cur.rating
    }, 0) / item.length


    const averageFixed = average.toFixed(1).replace(/[.,]0$/, '')
    
  return (
    <div className="Stats-container">
        <div className="totalViews">Total Posts: {item.length}</div>
        <div className="averageRating">Rating: {isNaN(averageFixed) ? 0 : averageFixed}</div>
    </div>
  )
}

export default FeedbackStats