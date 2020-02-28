import React from "react";
import eyeSpy from '../../images/background.png'

function Jumbotron() {
  return(
      <div className="jumbotron jumbotron-fluid" style={styles.banner}>
        <div className="container">
          <h1 className="display-4 text-center" style={styles.pallete}>(React) Google Book Search</h1>
            <p className="lead text-center" style={styles.appetizer}>Search for and Save Books of Interest</p>
        </div>
      </div>

  )
}

const styles = {

  banner : {
    backgroundImage: `url(${eyeSpy})`,
    boxShadow: '0 8px 6px -6px black' 
  },
  pallete: {
    color: '#fc9803',
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
    fontSize: '7em'
  },
  appetizer : {
    color: '#fc9803',
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
    fontSize: '1.75em'

  }


}

export default Jumbotron;