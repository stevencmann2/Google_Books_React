
import React from "react";


const EmptySavedCard = () => {

return (
    <div className="card p-3 mb-5" style={styles.shade}>
    
        <h5 className="card-title text-center">Save A Book to View it Here</h5>

    </div>
)

}

const styles = {

    shade: {
         boxShadow: '0 8px 6px -6px black' 
    }
}


export default EmptySavedCard;