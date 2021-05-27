import React from 'react';
import './Bannerform.css';
import image from '../../images/bg-3.jpg';


function Bannerform(){
    return(
        <div className='container-fluid form_banner'>
            <img className="img-fluid cst-img"  src = {image} alt='banner' /> 
        <div className="form_banner_text">
            <h1 style={{textAlign:'center'}}>Contact Form</h1>
            <div className="container formtext">
                  <p>Some quick example text to build on the card title and make up the bulk of the card's content.
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                  Some quick example text to build on the card title and make up the bulk of the card's content.</p>  
            </div>
            <form className="container form">
            <div className="form-row">
                <div className="col-md-6">    
                    <div>
                        <label className="sr-only" htmlFor="inlineFormInput">Name</label>
                        <input type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe"/>
                    </div>
                    <div>
                        <input type="email" className="form-control mb-2"  placeholder="Email"/>
                    </div>
                    <div>
                        <input type="text" className="form-control mb-2"  placeholder="Phone"/>
                    </div> 
                </div>
                <div className="col-md-6">    
                    <div>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Your message here..."></textarea>
                    </div> 
                </div>
            </div>
            </form>

        </div>

        </div>
    );
}

export default Bannerform;