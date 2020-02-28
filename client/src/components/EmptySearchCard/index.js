
import React from "react";


const EmptySearchCard = () => {

return (
    <div className="card p-3 mb-5" style={styles.dark}>
    
        <h5 className="card-title text-center">Search Books Above & View Them Here</h5>

    </div>
)

}

const styles = {

    dark: {
         boxShadow: '0 8px 6px -6px black' 
    }
}


export default EmptySearchCard;