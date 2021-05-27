import react from 'react';
import cardimage1 from '../../images/4-1.jpg';
import cardimage2 from '../../images/4-2.jpg';
import cardimage3 from '../../images/4-3.jpg';
import cardimage4 from '../../images/4-4.jpg';
import cardimage5 from '../../images/4-5.jpg';
import Card from '../CardSet/Card';

const useStyle = {
    card:{
        width:'251px',
        height:'350px'
    },
    image:{
        height: '200px'
    }

}
const cardStyle = {
    
    image:{
        height:'380px'
    },
    btn:{
        float:'left'
    }

}

function ServiceCardSet()
{
    let cardContent = "Some quick example text to build on the card title and make up the bulk of the card's content.";
    
    return(
        <div className="container">
         
          <div className="row">
              <div className="col-xl-3 col-md-3 col-sm-6 col-12" >
                <Card image={cardimage1} title="Column One" headtitle color="grey"
                content={cardContent} style={useStyle} add_margin />
              </div>
              
              <div className="col-xl-3 col-md-3 col-sm-6 col-12">
                <Card image={cardimage2} title="Column two" headtitle color="grey" showbtn btn="white" btntext="Read More"
                content={cardContent} style={useStyle} add_margin />
              </div>

              <div className="col-xl-3 col-md-3 col-sm-6 col-12">
                <Card image={cardimage3} title="Column three" headtitle color="grey" 
                content={cardContent} style={useStyle} add_margin />
              </div>
              
              <div className="col-xl-3 col-md-3 col-sm-6 col-12">
                <Card image={cardimage4} title="Column four" headtitle showbtn color="grey" btn="white" btntext="Deatils"
                content={cardContent} style={useStyle} add_margin />
              </div>

              <div className="col-xl-12 col-md-12 col-sm-12 col-12">
                 <Card image={cardimage5} title="Two Colum Left Side" style = {cardStyle} color="grey"  content="Some quick example 
                 text to build on the card title and 
                 make up the bulk of the card's content. Some quick example text to build on the card title and 
                 make up the bulk of the card's content.
                 Some quick example text to build on the card title and make up the bulk of the card's content.
                 Some quick example text to build on the card title and make up the bulk of the card's content.
                 Some quick example text to build on the card title and make up the bulk of the card's content.
                 Some quick example text to build on the card title and make up the bulk of the card's content.
                 Some quick example text to build on the card title and make up the bulk of the card's content."
                 showbtn color="white" btn = "white" btntext="Read More"  add_margin/>
               </div>
              
    
          </div>
          
       </div>
       
    );
}

export default ServiceCardSet;