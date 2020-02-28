import React from 'react';


const Footer=() => {
return(


<footer className="mt-5" style={styles.footer}>
    <div className="footer-copyright text-center text-light py-2" >
        <a style={{textDecoration: 'none'}} className="m-2" href="/">Google Books Search</a> 
            Developed by: 
        <a href="https://github.com/stevencmann2" className="m-2"  style={styles.text} style={{textDecoration: 'none'}}> 
            Steven Mann</a>
        </div>
</footer>

)


}

const styles ={
footer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    background: '#43ccd9',
    boxShadow: '0 -8px 6px -6px black'
}

}


export default Footer;